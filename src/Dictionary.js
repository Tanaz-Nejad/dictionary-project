import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photo, setPhoto] = useState(null);

  function handleImages(response) {
    setPhoto(response.data.photos);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setDefinition(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let apiKey = "563492ad6f917000010000017eb44f86b6fb4d85ac152435cdb5e294";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
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
        <Photos photos={photo} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
