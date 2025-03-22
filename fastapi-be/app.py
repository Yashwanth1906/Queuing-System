import os
from typing import List, Dict
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from groq import Groq
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY") or ""

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

client = Groq(api_key=GROQ_API_KEY)

class UserInput(BaseModel):
    message: str
    role: str = "user"
    conversation_id: str

class Conversation:
    def __init__(self):
        self.messages: List[Dict[str, str]] = [
            {"role": "system", "content": "You are a helpful AI"}
        ]
        self.active: bool = True

conversations: Dict[str, Conversation] = {}

def query_groq_api(conversation: Conversation):
    try:
        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=conversation.messages,
            temperature=1,
            max_tokens=1024,
            top_p=1,
            stream=None,
            stop=None
        )
        response = completion.choices[0].message.content
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def get_or_create_conversation(conversation_id: str):
    if conversation_id not in conversations:
        conversations[conversation_id] = Conversation()
    return conversations[conversation_id]

@app.post("/chat/")
async def chat(input: UserInput):
    conversation = get_or_create_conversation(input.conversation_id)
    
    if not conversation.active:
        raise HTTPException(status_code=400, detail="The chat session has ended.")
    
    try:
        conversation.messages.append({
            "role": input.role,
            "content": input.message
        })
        
        response = query_groq_api(conversation)

        conversation.messages.append({
            "role": "assistant",
            "content": response
        })
        
        return {
            "role" : "assistant",
            "content": response,
            "conversation_id": input.conversation_id
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=6969)