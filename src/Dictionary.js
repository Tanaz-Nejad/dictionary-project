import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function keywordSearch(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={keywordSearch}
              defaultValue={props.defaultWord}
            />
          </form>
          <div className="hints">i.e. sunset, sunrise, forest, wine, yoga</div>
        </section>
        <Result definition={definition} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
