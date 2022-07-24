import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions.map(function (definition, index) {
          if (index < 2) {
            return (
              <div key={index}>
                <strong>Definition:</strong>
                <p>{definition.definition}</p>
                <strong>Example:</strong>
                <br />
                <p>{definition.example}</p>
                <Synonyms synonyms={definition.synonyms} />
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
