import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <small>{props.meaning.example}</small>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
