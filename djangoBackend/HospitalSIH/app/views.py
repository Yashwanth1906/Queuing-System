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
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import train_model, predict_department


class TrainModelView(APIView):
    def post(self, request):
        try:
            result = train_model()
            return Response(result, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PredictDepartmentView(APIView):
    def post(self, request):
        try:
            symptoms = request.data.get("symptom", "")
            if not symptoms:
                return Response({"error": "Symptoms are required"}, status=status.HTTP_400_BAD_REQUEST)
            department = predict_department(symptoms)
            return Response({"department": department}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




# data = {
#     'symptoms': [
#         # Cardiology
#         "Chest pain, shortness of breath, palpitations, dizziness, fatigue, nausea, sweating",
#         "Sharp chest pain, rapid heartbeat, fatigue, sweating, and nausea",
#         "Pressure in the chest, irregular heartbeat, dizziness, and fatigue",
#         "Pain radiating to the arm, sweating, and nausea",
#         "Swelling in the legs, shortness of breath, and chest discomfort",
#         "Irregular heartbeat, fainting, and chest pain",
#         # Gastroenterology
#         "Abdominal pain, bloating, nausea, vomiting, constipation, and heartburn",
#         "Stomach ache, diarrhea, and fatigue",
#         "Persistent indigestion, loss of appetite, and heartburn",
#         "Severe abdominal pain, dehydration, and fatigue",
#         "Blood in stool, unintentional weight loss, and abdominal cramping",
#         # Neurology
#         "Headache, dizziness, weakness, and tingling in the limbs",
#         "Severe headache, loss of balance, and unsteady gait",
#         "Confusion, difficulty speaking, and numbness in limbs",
#         "Migraine with loss of vision and nausea",
#         "Seizures, memory loss, and difficulty concentrating",
#         # Obstetrics and Gynecology
#         "Irregular periods, pelvic pain, and nausea",
#         "Painful periods, heavy menstrual flow, and irritability",
#         "Frequent urination, pelvic pressure, and back pain",
#         "Unusual vaginal discharge, itching, and pelvic discomfort",
#         "Vaginal bleeding between periods and fatigue",
#         # General Medicine
#         "Cough, fever, and body aches",
#         "Persistent cough, sore throat, and headache",
#         "Dry cough, fatigue, and chills",
#         "Loss of taste or smell, shortness of breath, and fatigue",
#         # Rheumatology
#         "Joint pain, swelling, and morning stiffness",
#         "Painful joints, reduced mobility, and fatigue",
#         "Swollen joints with redness and warmth",
#         "Arthritis pain with limited range of motion",
#         # Combined Cases
#         "Chest pain, abdominal pain, and dizziness",
#         "Headache, nausea, and mild joint pain",
#         "Irregular periods, joint pain, and abdominal discomfort",
#         "Persistent fatigue, difficulty sleeping, and irritability"
#     ],
#     'department': [
#         # Cardiology
#         "Cardiology", "Cardiology", "Cardiology", "Cardiology", "Cardiology", "Cardiology",
#         # Gastroenterology
#         "Gastroenterology", "Gastroenterology", "Gastroenterology", "Gastroenterology", "Gastroenterology",
#         # Neurology
#         "Neurology", "Neurology", "Neurology", "Neurology", "Neurology",
#         # Obstetrics and Gynecology
#         "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology",
#         "Obstetrics and Gynecology", "Obstetrics and Gynecology",
#         # General Medicine
#         "General Medicine", "General Medicine", "General Medicine", "General Medicine",
#         # Rheumatology
#         "Rheumatology", "Rheumatology", "Rheumatology", "Rheumatology",
#         # Combined Cases
#         "Cardiology", "Neurology", "Rheumatology", "Obstetrics and Gynecology"
#     ]
# }

# #creating a DataFrame
# df = pd.DataFrame(data)

# # Encode target variable
# label_encoder = LabelEncoder()
# df['department_encoded'] = label_encoder.fit_transform(df['department'])

# # Train-test split
# X_train, X_test, y_train, y_test = train_test_split(df['symptoms'], df['department_encoded'], test_size=0.3, random_state=42)

# # Pipeline creation
# pipeline = Pipeline([
#     ('tfidf', TfidfVectorizer(stop_words='english', ngram_range=(1, 2))),
#     ('classifier', LogisticRegression(max_iter=1000, random_state=42))
# ])

# pipeline.fit(X_train, y_train)

# doctors_data = {
#     'id':[],
#     'doctor': [],
#     'department': [],
#     'waiting_time': []
# }


# df_doctors = pd.DataFrame(doctors_data)


# def predict_doctor(department):
#     available_doctors = df_doctors[(df_doctors['department'] == department)]
#     if available_doctors.empty:
#         return ""
#     least_waiting_time = available_doctors['waiting_time'].min()
#     print(least_waiting_time)
#     selected_doctor = available_doctors[available_doctors['waiting_time'] == least_waiting_time]['id'].iloc[0]
#     return selected_doctor

# class PredictDepartmentAndDoctorAPIView(APIView):
#     def post(self, request):
#         global df_doctors
#         print(request.data)
#         data = request.data
#         print("Doctors : ",data.get('doctors'))
#         doctors = data.get('doctors',[])
#         symptoms = data.get('symptom')
#         print(symptoms)
#         for i in doctors:
#             doctors_data['id'].append(i['id'])
#             doctors_data['doctor'].append(i['name'])
#             doctors_data['department'].append(i['department']['name'])
#             doctors_data['waiting_time'].append(i["_count"]['opdQueue'])
#         print(doctors_data)
#         df_doctors = pd.DataFrame(doctors_data)
#         symptom_serializer = SymptomInputSerializer(data={"symptoms":symptoms})
#         if symptom_serializer.is_valid():
#             symptoms = symptom_serializer.validated_data['symptoms']
#             department_prediction = pipeline.predict([symptoms])
#             department = label_encoder.inverse_transform(department_prediction)[0]
#             print(department)
#             doctor = predict_doctor(department)
#             if(doctor == ""):
#                 return Response({'department': department, "error":"No Doctor there in the particular department"}, status=status.HTTP_200_OK)
#             # Return both the department and doctor in the response
#             return Response({'department': department, 'doctor': doctor}, status=status.HTTP_200_OK)
#         print(symptom_serializer.errors)
#         return Response(symptom_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TrainModelAPIView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            df = pd.read_csv(csv_path)
            print(df)
            label_encoders = {}
            for col in ['Day', 'Weather', 'Department']:
                le = LabelEncoder()
                df[col] = le.fit_transform(df[col])
                label_encoders[col] = le
            X = df.drop(columns=['Number of patients', 'Date', 'PPDH', 'Number of doctors', 'Time'])
            y = df['Number of patients']
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
            scaler = StandardScaler()
            X_train_scaled = scaler.fit_transform(X_train)
            X_test_scaled = scaler.transform(X_test)
            model = TabNetRegressor()
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
            joblib.dump(model, model_path)
            joblib.dump(scaler, scalar_path)
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
                predictions = []
                input_df = pd.DataFrame([input_data])

                # Encode categorical columns
                for col in ['Day', 'Weather']:
                    if col in input_df.columns:
                        input_df[col] = label_encoders[col].transform(input_df[col])

                # Add all departments to the input
                departments = label_encoders['Department'].classes_
                for department in departments:
                    department_encoded = label_encoders['Department'].transform([department])[0]
                    department_row = input_df.copy()
                    department_row['Department'] = department_encoded

                    input_scaled = scaler.transform(department_row)
                    prediction = model.predict(input_scaled)
                    predicted_patients = round(prediction[0].item())
                    predicted_patients = max(0, min(predicted_patients, 1000))

                    predictions.append({'Department': department, 'predicted_patients': predicted_patients})

                return Response(predictions, status=status.HTTP_200_OK)

            except Exception as e:
                print(e)
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def test(r):
    return "Running"