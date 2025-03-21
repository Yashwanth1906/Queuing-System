import os
from typing import List,Dict
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from groq import Groq
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

app = FastAPI()

@app.get("/")
def test():
    return {"Hello"}

