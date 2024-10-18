import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h4>{props.meaning.partOfSpeech}</h4>
        <h3>{props.meaning.definition}</h3>
        <span className="example">{props.meaning.example}</span>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
