import EmployeeCard from "./EmployeeCard";

export default function EmployeeList({ employees }) {
  return (
    <>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </>
  );
}