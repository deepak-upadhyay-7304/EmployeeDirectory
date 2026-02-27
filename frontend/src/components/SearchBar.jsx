import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 1000); // debounce

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <input
      type="text"
      placeholder="Search by name or department..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{ padding: "8px", width: "300px" }}
    />
  );
}