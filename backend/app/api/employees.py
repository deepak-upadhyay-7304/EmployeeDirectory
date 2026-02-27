from fastapi import APIRouter, Depends
from app.db.base import AsyncSessionLocal
from app.repositories.employee_repo import EmployeeRepo
from app.services.employee_service import EmployeeService

router = APIRouter()

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

@router.get("/employees")
async def get_employees(search: str | None = None, db=Depends(get_db)):

    repo = EmployeeRepo(db)
    service = EmployeeService(repo)

    data = await service.search_employees(search)

    return {"items": data}