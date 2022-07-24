import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions.map(function (definition, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <strong>Definition:</strong>
                <p>{definition.definition}</p>
                <br />
                <strong>Example:</strong>
                <em> {definition.example}</em>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
