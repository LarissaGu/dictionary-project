import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for something"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
}
