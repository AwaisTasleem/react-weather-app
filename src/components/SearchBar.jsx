
import { useState } from "react";

function SearchBar({ onSearch, loading }) {

  const [city, setCity] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    if (city.trim() === "") {
      return;
    }

    onSearch(city.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

    </form>
  );
}

export default SearchBar;
