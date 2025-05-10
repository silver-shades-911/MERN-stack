import React, { Component } from "react";
import NewsItem from "./NewsItem.jsx";
import Spinner from "./Spinner.jsx";

export default class NewComponent extends Component {
  constructor() {
    super();
    console.log("Hello i am constructor, run 1st");
    this.state = {
      // initial values setting
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // This run after render
    console.log("i am cDM run 3rd");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: Math.ceil(parsedData.totalResults / 12),
      loading: false,
    });
  }

  handlePrevPage = async () => {
    console.log("HI");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNextPage = async () => {
    console.log("HEllO");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    console.log("I am render, run 2nd ");
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}
        <h1>SuperNews - top Headlines</h1>
        <div
          className="my-5 row row-cols-4 row-gap-5"
          style={{ minHeight: "1000px" }}
        >
          {!this.state.loading && this.state.articles.map((news) => {
            return (
              <div
                className="col"
                key={news.url ? news.url : `${Math.random()}`}
              >
                <NewsItem
                  title={news.title ? news.title : "Unknown"}
                  description={news.description ? news.description : "Unknown"}
                  imageURL={
                    news.urlToImage
                      ? news.urlToImage
                      : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                  }
                  newsURL={news.url ? news.url : "/"}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex flex-row justify-content-between ">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevPage}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={this.handleNextPage}
            className="btn btn-dark"
            disabled={this.state.page + 1 > this.state.totalResults}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
