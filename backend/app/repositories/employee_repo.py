from sqlalchemy import text

class EmployeeRepo:

    def __init__(self, session):
        self.session = session

    async def search(self, search: str | None):

        if search:
            query = text("""
                SELECT id, name, email, department, designation, date_of_joining
                FROM employees
                WHERE
                    MATCH(name, department)
                    AGAINST(:search IN NATURAL LANGUAGE MODE)
                OR
                    department LIKE CONCAT('%', :search, '%')
                OR
                    name LIKE CONCAT('%', :search, '%')
                
            """)

            result = await self.session.execute(
                query, {"search": search}
            )
        else:
            result = await self.session.execute(
                text("SELECT * FROM employees")
            )

        rows = result.fetchall()
        return [dict(row._mapping) for row in rows]