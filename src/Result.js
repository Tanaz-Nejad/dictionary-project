import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.definition);
  if (props.definition) {
    return (
      <div className="results">
        <section>
          <h1>{props.definition.word}</h1>
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
