import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, publishedAt , source} =
      this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 start-50 translate-middle badge" style={{ backgroundColor: "#77B1D4", color: "F2F0EF"}}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={imageURL}
          className="card-img-top"
          alt="..."
          style={{ height: "11rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 20 ? title.slice(0, 20) : title}
          </h5>
          <p className="card-text" style={{ height: "72px" }}>
            {description.length > 90 ? description.slice(0, 90) : description}
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              by {author ? author.slice(0, 10) : "Unknown"} on{" "}
              {new Date(publishedAt).toDateString()}
            </small>
          </p>
          {/* {console.log(publishedAt)} */}
          <a href={newsURL} className="card-link">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
