# prediction/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SymptomInputSerializer
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import pandas as pd

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

# Fit the pipeline
pipeline.fit(X_train, y_train)

# Dummy data for doctors (replace with your actual data)
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


def test(r):
    return "Running"