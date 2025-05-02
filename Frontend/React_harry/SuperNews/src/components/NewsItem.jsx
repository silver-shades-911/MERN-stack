import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description, imageURL, newsURL} = this.props;
    return (
        <div className="card" style={{width:"18rem",}}>
          <img src={imageURL} className="card-img-top" alt="..." style={{height: "11rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,20)}</h5>
            <p className="card-text">
             {description.slice(0, 90)}
            </p>
            <a href={newsURL} className="card-link">Read More</a>
          </div>
        </div>
 
    );
  }
}
