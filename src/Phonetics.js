import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href="https://api.dictionaryapi.dev/media/pronunciations/en/sunset-us.mp3"
        target="_blank"
      >
        Listen
      </a>
      <h5>{props.phonetic.text}</h5>
    </div>
  );
}
