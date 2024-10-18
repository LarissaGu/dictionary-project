import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul>
        {" "}
        {props.synonyms.map(function (synonym, indexsynonyms) {
          return <li key={indexsynonyms}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
