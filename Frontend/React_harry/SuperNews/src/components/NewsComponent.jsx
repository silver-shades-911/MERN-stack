import React, { Component } from "react";
import NewsItem from "./NewsItem.jsx";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";
import { Route } from "react-router";

export default class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
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

async updateNews(page) {
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category
      }&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=${page
      }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: Math.ceil(parsedData.totalResults / 12),
      loading: false,
    });
}

  async componentDidMount() {
    // This run after render
    console.log("i am cDM run 3rd");
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=1&pageSize=12`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: Math.ceil(parsedData.totalResults / 12),
    //   loading: false,
    // });
    // console.log(this.props.country, this.props.category);
    this.updateNews(1);
  }

  handlePrevPage = async () => {
    console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
    //   }&category=${this.props.category
    //   }&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=${this.state.page - 1
    //   }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false,
    // });
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews(this.state.page - 1);

  };

  handleNextPage = async () => {
    console.log("Next");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
    //   }&category=${this.props.category
    //   }&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=${this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page + 1,
    //   loading: false,
    // });
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews(this.state.page + 1);
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
          {!this.state.loading &&
            this.state.articles.map((news) => {
              return (
                <div
                  className="col"
                  key={news.url ? news.url : `${Math.random()}`}
                >
                  <NewsItem
                    title={news.title ? news.title : "Unknown"}
                    description={
                      news.description ? news.description : "Unknown"
                    }
                    imageURL={
                      news.urlToImage
                        ? news.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                    }
                    newsURL={news.url ? news.url : "/"}
                    author={news.author}
                    publishedAt={news.publishedAt}
                    source={news.source.name}
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
