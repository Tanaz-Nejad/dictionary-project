import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>

        {props.meaning.definitions.map(function (definition, index) {
          if (index < 1) {
            return (
              <div key={index}>
                <p>
                  {definition.definition}
                  <br />
                </p>
                <Synonyms synonyms={props.meaning.synonyms} />
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
