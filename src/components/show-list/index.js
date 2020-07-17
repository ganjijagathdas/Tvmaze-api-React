import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export default ({ type, shows }) => {
  let List = shows
    .map((show,index) => (
      <div className="column_pic" key={index}> 
        <Link to={{ pathname: `/show/${show.id}`, show }}>
          <img src={show.image ? show.image.medium : null} alt={show.name} style={{ width: "100%" }} />
          <div className="show_name">{show.name}</div>
        </Link>
      </div>
    ))

  return (
    <div>
      <h2>{type}</h2>
      <Row>{List}</Row>
    </div>
  );
};
