import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span className="Synonyms-text">Similar:</span>
        <ul>
          {" "}
          {props.synonyms.map(function (synonym, indexsynonyms) {
            return <li key={indexsynonyms}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
