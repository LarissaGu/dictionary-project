import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <div className="row Pictures">
        {props.pictures.map(function (picture, indexpictures) {
          return (
            <div className="col-4">
              <a href={picture.src.landscape} target="_blank" rel="noreferrer">
                <img
                  src={picture.src.landscape}
                  className="img-fluid"
                  alt={picture.alt}
                  key={indexpictures}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
