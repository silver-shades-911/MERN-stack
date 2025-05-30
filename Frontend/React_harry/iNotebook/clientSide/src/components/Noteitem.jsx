import React from "react";
import PropTypes from "prop-types";

const Noteitem = (props) => {
  const { title, description, _id, tag } = props.note;

  return (
   
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <p className="card-text">{description}</p>
          <a href="#" className="card-link">
            <i className="fa-solid fa-trash"></i>
          </a>
          <a href="#" className="card-link">
            <i className="fa-solid fa-pen-to-square"></i>
          </a>
        </div>
      </div>

  );
};

Noteitem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.array,
  _id: PropTypes.string,
};

export default Noteitem;
