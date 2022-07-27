import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonym.synonyms.length) {
    return (
      <div className="Synonyms">
        <h2>synonyms:</h2>
        {props.synonym.synonyms.map(function (word, index) {
          return (
            <ul key={index}>
              <li>{word}</li>
            </ul>
          );
        })}
      </div>
    );
  } else return null;
}
