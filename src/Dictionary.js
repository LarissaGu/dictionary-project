import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Pictures from "./Pictures";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [pictures, setPictures] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePicturesResponse(response) {
    setPictures(response.data.photos);
  }

  function search() {
    let apiKey = "f1adaca67t6e03d488b4ca1d5710830o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let picturesApiKey = "f1adaca67t6e03d488b4ca1d5710830o";
    let picturesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${picturesApiKey}`;
    axios.get(picturesApiUrl).then(handlePicturesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            defaultValue={props.defaultKeyword}
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <Results results={results} />
        <Pictures pictures={pictures} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
