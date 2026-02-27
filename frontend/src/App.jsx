import { useState } from "react";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchEmployees = async (search = "") => {
    if (!search.trim()) {
      setEmployees([]);
      setSearched(false);
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(
        `${API}/employees?search=${search}`
      );

      const data = await res.json();
      setEmployees(data.items || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Directory</h2>

      <SearchBar onSearch={fetchEmployees} />

      {!searched && (
        <p>Search employees by name or department.</p>
      )}

      {loading && <p>Loading...</p>}

      {searched && !loading && employees.length === 0 && (
        <p>No employees found.</p>
      )}

      {!loading && employees.length > 0 && (
        <EmployeeList employees={employees} />
      )}
    </div>
  );
}

export default App;