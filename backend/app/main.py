from fastapi import FastAPI
from app.api.employees import router as employee_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(employee_router)

@app.get("/")
async def root():
    return {"message": "Employee API Running 🚀"}