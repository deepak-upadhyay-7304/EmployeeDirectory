class EmployeeService:

    def __init__(self, repo):
        self.repo = repo

    async def search_employees(self, search):
        return await self.repo.search(search)