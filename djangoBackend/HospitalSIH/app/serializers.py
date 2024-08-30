# prediction/serializers.py
from rest_framework import serializers

class SymptomInputSerializer(serializers.Serializer):
    symptoms = serializers.CharField()

class DoctorPredictionSerializer(serializers.Serializer):
    department = serializers.CharField()
