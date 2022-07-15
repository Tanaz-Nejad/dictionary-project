import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function keywordSearch(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`The keyword you searched for is ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="DictionaryForm">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={keywordSearch} />
      </form>
    </div>
  );
}
