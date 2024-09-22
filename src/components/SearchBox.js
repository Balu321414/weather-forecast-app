import React, { useState } from "react";

const SearchBox = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input);
      setInput("");
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a city"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
