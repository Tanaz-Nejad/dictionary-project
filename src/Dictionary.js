import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function keywordSearch(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="DictionaryForm">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={keywordSearch} />
      </form>
      <Result definition={definition} />
    </div>
  );
}
