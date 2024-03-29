import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <section>
          <h1>{props.definition.word}</h1>
          {props.definition.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
