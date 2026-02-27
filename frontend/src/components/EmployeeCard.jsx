export default function EmployeeCard({ employee }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h4>{employee.name}</h4>
      <p>{employee.designation}</p>
      <p>{employee.department}</p>
      <p>{employee.email}</p>
    </div>
  );
}