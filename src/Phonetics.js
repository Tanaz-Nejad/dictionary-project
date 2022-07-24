import React from "react";

import "./Phonetic.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href="https://api.dictionaryapi.dev/media/pronunciations/en/sunset-us.mp3"
        target="_lank"
        rel="noreferrer"
      >
        Listen
      </a>
      <h2>{props.phonetic.text}</h2>
    </div>
  );
}
