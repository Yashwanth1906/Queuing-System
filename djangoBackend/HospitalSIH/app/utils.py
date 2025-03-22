import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import LabelEncoder

def train_model():
    expanded_data = {
        'symptoms': [
            "chest pain, shortness of breath, palpitation, dizziness, fatigue, nausea, sweating",
            "sharp chest pain, rapid heartbeat, shortness of breath, fatigue",
            "pressure in chest, palpitations, dizziness",
            "angina, tightness in chest, shortness of breath",
            "pain in chest radiating to arm, sweating, nausea",
            "abdominal pain, bloating, indigestion, gas, nausea, vomiting, constipation, heartburn, loss of appetite",
            "stomach ache, nausea, bloating, gas, constipation, diarrhea",
            "indigestion, heartburn, abdominal cramping, loss of appetite",
            "pain in abdomen, nausea, bloating, gas",
            "diarrhea, constipation, stomach cramping, nausea",
            "headache, dizziness, weakness, shaking or jerking of the body, confusion, tingling or numbness",
            "severe headache, loss of balance, tingling, confusion",
            "persistent headache, unsteady gait, jerking movements",
            "migraine, loss of vision, nausea, dizziness",
            "confusion, difficulty speaking, numbness in limbs",
            "irregular periods, pelvic pain",
            "painful periods, heavy menstrual flow, pelvic discomfort",
            "cramps, irregular menstrual cycle, pelvic pain",
            "vaginal bleeding between periods, abdominal pain",
            "painful intercourse, irregular periods, abdominal bloating",
            "cough, fever",
            "persistent cough, high fever, sore throat",
            "dry cough, fever, body aches",
            "sore throat, cough, fever",
            "fever, chills, cough, muscle aches",
            "joint pain, swelling",
            "painful joints, swelling, stiffness, reduced mobility",
            "swollen joints, joint stiffness, pain, difficulty moving",
            "arthritis pain, joint stiffness, swelling",
            "pain and swelling in joints, difficulty in movement",
            "chest tightness and shortness of breath, with swelling in the legs",
            "abdominal cramping and nausea with fever and rash",
            "severe headache and loss of vision with nausea",
            "pelvic pain with irregular bleeding and abdominal bloating",
            "pain and swelling in joints with fever and rash","cold"
        ],
        'department': [
            "Cardiology", "Cardiology", "Cardiology", "Cardiology", "Cardiology",
            "Gastroenterology", "Gastroenterology", "Gastroenterology", "Gastroenterology", "Gastroenterology",
            "Neurology", "Neurology", "Neurology", "Neurology", "Neurology",
            "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology", "Obstetrics and Gynecology",
            "General Medicine", "General Medicine", "General Medicine", "General Medicine", "General Medicine",
            "Rheumatology", "Rheumatology", "Rheumatology", "Rheumatology", "Rheumatology",
            "Cardiology", "Gastroenterology", "Neurology", "Obstetrics and Gynecology", "Rheumatology","General Medicine"
        ]
    }
    df_expanded = pd.DataFrame(expanded_data)
    label_encoder = LabelEncoder()
    df_expanded['department_encoded'] = label_encoder.fit_transform(df_expanded['department'])
    X_train, X_test, y_train, y_test = train_test_split(
        df_expanded['symptoms'],
        df_expanded['department_encoded'],
        test_size=0.3,
        random_state=42
    )
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(stop_words='english', ngram_range=(1, 2))),
        ('classifier', LogisticRegression(max_iter=1000, random_state=42))
    ])
    param_grid = {
        'classifier__C': [0.1, 1, 10],
        'classifier__solver': ['liblinear', 'lbfgs'],
    }
    grid_search = GridSearchCV(pipeline, param_grid, cv=5, n_jobs=-1, verbose=2)
    grid_search.fit(X_train, y_train)
    joblib.dump(grid_search.best_estimator_, 'trained_department_model.joblib')
    joblib.dump(label_encoder, 'label_encoder.joblib')
    return {"status": "Model trained and saved successfully!"}

def predict_department(symptoms):
    trained_model = joblib.load('trained_department_model.joblib')
    label_encoder = joblib.load('label_encoder.joblib')
    prediction = trained_model.predict([symptoms])
    department = label_encoder.inverse_transform(prediction)[0]
    return department