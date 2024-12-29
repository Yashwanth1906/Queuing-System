# prediction/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SymptomInputSerializer
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from pytorch_tabnet.tab_model import TabNetRegressor
from sklearn.preprocessing import LabelEncoder,StandardScaler
from rest_framework import serializers
import pandas as pd
import joblib
import os
from django.conf import settings
csv_path = os.path.join(settings.BASE_DIR, 'ml', 'Book1.csv')
model_path = os.path.join(settings.BASE_DIR, 'ml', 'tabnet_model.pkl')
scalar_path = os.path.join(settings.BASE_DIR,'ml','scaler.pkl')
label_encoder_path = os.path.join(settings.BASE_DIR,'ml','label_encoders.pkl')

data = {
    'symptoms': [
        # Cardiology
        "chest pain, shortness of breath, palpitation, dizziness, fatigue, nausea, sweating",
        "sharp chest pain, rapid heartbeat, shortness of breath, fatigue, nausea, sweating",
        "pressure in chest, palpitations, dizziness, fatigue, nausea",
        "angina, tightness in chest, shortness of breath, sweating, nausea, dizziness",
        "pain in chest radiating to arm, sweating, nausea, fatigue",
        "irregular heartbeat, fainting, chest discomfort, dizziness, fatigue",
        "swelling in legs, fatigue, shortness of breath, dizziness, chest pain",
        # Gastroenterology
        "abdominal pain, bloating, indigestion, gas, nausea, vomiting, constipation, heartburn, loss of appetite",
        "stomach ache, nausea, bloating, gas, constipation, diarrhea, fatigue",
        "indigestion, heartburn, abdominal cramping, loss of appetite, nausea, fatigue",
        "pain in abdomen, nausea, bloating, gas, constipation",
        "diarrhea, constipation, stomach cramping, nausea, fatigue",
        "blood in stool, weight loss, fatigue, nausea",
        "persistent vomiting, severe abdominal pain, dehydration, fatigue",
        # Neurology
        "headache, dizziness, weakness, shaking or jerking of the body, confusion, tingling or numbness",
        "severe headache, loss of balance, tingling, confusion, fatigue, irritability",
        "persistent headache, unsteady gait, jerking movements, dizziness, nausea",
        "migraine, loss of vision, nausea, dizziness, fatigue, irritability",
        "confusion, difficulty speaking, numbness in limbs, headache, dizziness",
        "seizures, memory loss, difficulty concentrating, fatigue",
        "muscle weakness, slurred speech, vision problems, headache, dizziness",
        # Obstetrics and Gynecology
        "irregular periods, pelvic pain, fatigue, nausea",
        "painful periods, heavy menstrual flow, pelvic discomfort, fatigue, irritability",
        "cramps, irregular menstrual cycle, pelvic pain, nausea, fatigue",
        "vaginal bleeding between periods, abdominal pain, fatigue",
        "painful intercourse, irregular periods, abdominal bloating, fatigue",
        "frequent urination, pelvic pressure, back pain, fatigue",
        "unusual vaginal discharge, itching, pelvic pain, fatigue",
        # General Medicine
        "cough, fever, fatigue, body aches",
        "persistent cough, high fever, sore throat, fatigue, headache",
        "dry cough, fever, body aches, fatigue",
        "sore throat, cough, fever, fatigue",
        "fever, chills, cough, muscle aches, fatigue",
        "fatigue, headache, sore throat, runny nose, loss of appetite",
        "loss of taste or smell, shortness of breath, fatigue, headache",
        # Rheumatology
        "joint pain, swelling, fatigue, morning stiffness",
        "painful joints, swelling, stiffness, reduced mobility, fatigue",
        "swollen joints, joint stiffness, pain, difficulty moving, fatigue",
        "arthritis pain, joint stiffness, swelling, fatigue",
        "pain and swelling in joints, difficulty in movement, fatigue",
        "morning stiffness, fatigue, joint tenderness, loss of appetite",
        "redness and warmth in joints, limited range of motion, fatigue",
        # Combined Cases
        "persistent fatigue, moderate to severe headaches, occasional nausea after meals, mild joint pain in knees and wrists, difficulty sleeping, increased irritability, decreased appetite",
        "chest pain, shortness of breath, dizziness, abdominal pain, nausea, fatigue",
        "persistent headache, nausea, chest pain, dizziness, fatigue",
        "joint pain, headache, fatigue, loss of appetite, abdominal pain",
        "irregular periods, joint pain, fatigue, abdominal pain, headache",
        "chest pain, fatigue, joint pain, nausea, headache, shortness of breath"
    ],
    'department': [
        "Cardiology", "Cardiology", "Cardiology", "Cardiology", "Cardiology", "Cardiology", "Cardiology",
        "Gastroenterology", "Gastroenterology", "Gastroenterology", "Gastroenterology", "Gastroenterology", "Gastroenterology", "Gastroenterology",
        "Neurology", "Neurology", "Neurology", "Neurology", "Neurology", "Neurology", "Neurology",
        "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology",
        "General","General","General","General","General","General","General",
        "Rheumatology", "Rheumatology", "Rheumatology", "Rheumatology", "Rheumatology", "Rheumatology", "Rheumatology",
        "Neurology", "Cardiology", "Neurology", "Rheumatology", "Obstetrics and Gynecology", "Cardiology"
    ]
}

#creating a DataFrame
df = pd.DataFrame(data)

# Encode target variable
label_encoder = LabelEncoder()
df['department_encoded'] = label_encoder.fit_transform(df['department'])

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(df['symptoms'], df['department_encoded'], test_size=0.3, random_state=42)

# Pipeline creation
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english', ngram_range=(1, 2))),
    ('classifier', LogisticRegression(max_iter=1000, random_state=42))
])

pipeline.fit(X_train, y_train)

doctors_data = {
    'id':[],
    'doctor': [],
    'department': [],
    'waiting_time': []
}


df_doctors = pd.DataFrame(doctors_data)


def predict_doctor(department):
    available_doctors = df_doctors[(df_doctors['department'] == department)]

    if available_doctors.empty:
        return ""
    
    least_waiting_time = available_doctors['waiting_time'].min()
    print(least_waiting_time)
    selected_doctor = available_doctors[available_doctors['waiting_time'] == least_waiting_time]['id'].iloc[0]
    return selected_doctor

class PredictDepartmentAndDoctorAPIView(APIView):
    def post(self, request):
        global df_doctors
        print(request.data)
        data = request.data
        print("Doctors : ",data.get('doctors'))
        doctors = data.get('doctors',[])
        symptoms = data.get('symptom')
        print(symptoms)
        for i in doctors:
            doctors_data['id'].append(i['id'])
            doctors_data['doctor'].append(i['name'])
            doctors_data['department'].append(i['department']['name'])
            doctors_data['waiting_time'].append(i["_count"]['opdQueue'])
        print(doctors_data)
        df_doctors = pd.DataFrame(doctors_data)
        symptom_serializer = SymptomInputSerializer(data={"symptoms":symptoms})
        if symptom_serializer.is_valid():
            symptoms = symptom_serializer.validated_data['symptoms']
            department_prediction = pipeline.predict([symptoms])
            department = label_encoder.inverse_transform(department_prediction)[0]

            # Step 2: Predict the doctor based on the predicted department

            print(department)
            doctor = predict_doctor(department)
            if(doctor == ""):
                return Response({'department': department, "error":"No Doctor there in the particular department"}, status=status.HTTP_200_OK)
            # Return both the department and doctor in the response
            return Response({'department': department, 'doctor': doctor}, status=status.HTTP_200_OK)
        print(symptom_serializer.errors)
        return Response(symptom_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TrainModelAPIView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            df = pd.read_csv(csv_path)
            print(df)

            label_encoders = {}
            for col in ['Day', 'Weather']:
                le = LabelEncoder()
                df[col] = le.fit_transform(df[col])
                label_encoders[col] = le

            X = df.drop(columns=['Number of patients', 'Date', 'PPDH', 'Number of doctors', 'Time'])
            y = df['Number of patients']

            # Split the data
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

            scaler = StandardScaler()
            X_train_scaled = scaler.fit_transform(X_train)
            X_test_scaled = scaler.transform(X_test)
            model = TabNetRegressor()

            # Train the model
            model.fit(
                X_train_scaled, y_train.to_numpy().reshape(-1, 1),
                eval_set=[(X_train_scaled, y_train.to_numpy().reshape(-1, 1)), (X_test_scaled, y_test.to_numpy().reshape(-1, 1))],
                eval_name=['train', 'valid'],
                eval_metric=['mae'],
                max_epochs=200,
                patience=20,
                batch_size=256,
                virtual_batch_size=128,
                num_workers=0,
                drop_last=False
            )
            joblib.dump(model,model_path)
            joblib.dump(scaler,scalar_path)
            joblib.dump(label_encoders, label_encoder_path)

            return Response({'status': 'Model trained and saved successfully'}, status=HTTP_200_OK)

        except Exception as e:
            print(e)
            return Response({'error': str(e)}, status=HTTP_500_INTERNAL_SERVER_ERROR)


class PredictInputSerializer(serializers.Serializer):
    Day = serializers.CharField(max_length=50)
    Holiday = serializers.IntegerField()
    Special_Event = serializers.IntegerField()
    Weather = serializers.CharField(max_length=50)

class PredictOneDayAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = PredictInputSerializer(data=request.data)
        if serializer.is_valid():
            input_data = serializer.validated_data
            model = joblib.load(model_path)
            scaler = joblib.load(scalar_path)
            label_encoders = joblib.load(label_encoder_path)
            try:
                input_df = pd.DataFrame([input_data])

                for col in ['Day', 'Weather']:
                    if col in input_df.columns:
                        input_df[col] = label_encoders[col].transform(input_df[col])

                input_df = input_df.drop(columns=['Date', 'PPDH', 'Number of doctors', 'Time'], errors='ignore')

                input_scaled = scaler.transform(input_df)

                prediction = model.predict(input_scaled)

                return Response({'predicted_patients': prediction[0]}, status=status.HTTP_200_OK)

            except Exception as e:
                print(e)
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def test(r):
    return "Running"