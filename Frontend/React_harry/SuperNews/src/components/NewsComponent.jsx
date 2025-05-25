import React, { Component } from "react";
import NewsItem from "./NewsItem.jsx";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from 'uuid';

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

  capitalize = (words) => {
    return String(words).charAt(0).toUpperCase() + String(words).slice(1);
  };

  constructor(props) {
    super(props);
    console.log("Hello i am constructor, run 1st");
    this.state = {
      // initial values setting
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `SuperNews - ${this.capitalize(this.props.category)} News`;
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const {page} = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("updateNews --->",parsedData);
    this.setState({
      articles: parsedData.articles,
      // totalResults: Math.ceil(parsedData.totalResults / 12),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };


   fetchMoreData = async () => {
    const { country, category, pageSize } = this.props;
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=${nextPage}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("fetchMoreDate --->",parsedData);
    this.setState((prev) => ({
      articles: prev.articles.concat(parsedData.articles),
      loading: false,
      page: nextPage,
    }));
  };

  async componentDidMount() {
    // This run after render
    console.log("i am cDM run 3rd");
    this.updateNews();
  }

  render() {
    console.log("I am render, run 2nd ");
    const { articles, loading, totalResults } = this.state;
    return (
      <>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <h1>
              SuperNews - Top {this.capitalize(this.props.category)} Headlines
            </h1>
            <div
              className="my-5 row row-cols-4 row-gap-5"
              style={{ minHeight: "1000px" }}
            >
              {this.state.articles.map((news) => {
                return (
                  <div
                    className="col"
                    key={uuidv4()}
                  >
                    <NewsItem
                      title={news.title || "Unknown"}
                      description={
                        news.description || "Unknown"
                      }
                      imageURL={
                        news.urlToImage || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                      }
                      newsURL={news.url || "/"}
                      author={news.author}
                      publishedAt={news.publishedAt}
                      source={news.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    );
  }
}
