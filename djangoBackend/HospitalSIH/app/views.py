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