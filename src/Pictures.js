import React from "react";

export default function Pictures(props) {
  console.log(props.pictures);

  if (props.pictures) {
    return (
      <section className="Pictures">
        <div className="row">
          {props.pictures.map(function (picture, indexpictures) {
            return (
              <div className="col-4">
                <a
                  href={picture.src.landscape}
                  target="_blank"
                  rel="noreferrer"
                >
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
      </section>
    );
  } else {
    return null;
  }
}
