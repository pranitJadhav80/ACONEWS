import React, { useState } from "react";
import logo from "../Images/aconews logo.png";
import "./Header.css";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  const handleKeywordClick = keyword => {
    onSearch(keyword);
  };

  const handleLogoClick = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <header className="App-header">
      <img className="Image" src={logo} alt="logo" onClick={handleLogoClick} />

      {/* Keyword Buttons */}
      <div className="keyword-buttons">
        <button onClick={() => handleKeywordClick("India")}>India</button>
        <button onClick={() => handleKeywordClick("Technology")}>
          Technology
        </button>
        <button onClick={() => handleKeywordClick("Stocks")}>Stocks</button>
        <button onClick={() => handleKeywordClick("Movies")}>Movies</button>
        <button onClick={() => handleKeywordClick("Sports")}>Sports</button>
        <button onClick={() => handleKeywordClick("World")}>World</button>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search Keywords 🔎"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;
