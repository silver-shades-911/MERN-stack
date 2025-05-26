import React, { Component } from "react";
import NewsItem from "./NewsItem.jsx";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from "uuid";

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
      loading: true,
      page: 1,
      totalResults: 0,
      hasMoreData: true,
    };
    document.title = `SuperNews - ${this.capitalize(this.props.category)} News`;
  }

  async updateNews() {
    const { country, category, pageSize, setProgress, apiKey } = this.props;
    setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
    // const {page} = this.state;
    this.setState({ loading: true });
    

    try {
      let data = await fetch(url);

      setProgress(25);
      let parsedData = await data.json();
      console.log(parsedData);
      if (parsedData.status === "ok") {
        const initialArticles = parsedData.articles
          ? parsedData.articles.filter((article) => article !== null) // filter null articles
          : []; // otherwise return empty array
        setProgress(50)
        // update state
        this.setState({
          articles: initialArticles,
          totalResults: parsedData.totalResults,
          loading: false,
          page: 1, // Reset to page 1
          // check if initial fetch already cover totalResult or is empty
          hasMoreData:
            initialArticles.length < parsedData.totalResults &&
            initialArticles.length > 0,
        });

        setProgress(75)

      } else {
        console.error("NewsAPI Error:", parsedData.message);
        this.setState({
          loading: false,
          hasMoreData: false, // stop API to Fetch on error
        });
      }
      setProgress(100);
    } catch (error) {
      console.error("fetch Error:", error);
      this.setState({
        loading: false,
        hasMoreData: false, // stop on network error
      });
    }
  }

  fetchMoreData = async () => {
    // If we now there is no more data, just return.
    if (!this.state.hasMoreData) {
      return;
    }

    const { country, category, pageSize, apiKey } = this.props;
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;

    // fetching time

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.status === "ok") {
        // check parsedData.articles exists and filter null articles
        const fetchedArticles = parsedData.articles
          ? parsedData.articles.filter((article) => article !== null)
          : [];

        //if API return 0 articles, we'have reached the end
        if (fetchedArticles.length === 0) {
          this.setState({ hasMoreData: false });
          return;
        }

        // filter duplicate news

        this.setState((prevState) => {
          const newArticles = fetchedArticles.filter((newArticle) => (
            !prevState.articles.some((oldArt) => 
              oldArt.url === newArticle.url
            )
          ));

          const updatedArticles = prevState.articles.concat(newArticles);

          return {
            articles: updatedArticles,
            page: nextPage,
            // keep fetching if there is more articles
            hasMoreData: updatedArticles.length < prevState.totalResults,
          };
        });
      } else {
        console.error("NewsAPI Error (fetchMore):", parsedData.message);
        this.setState({ hasMoreData: false }); // stop API on error
      }
    } catch (error) {
      console.error("Fetch Error (fetchMore):", error);
      this.setState({ hasMoreData: false }); // stop on network error
    }
  };

  //   // console.log("updateNews --->",parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     // totalResults: Math.ceil(parsedData.totalResults / 12),
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  // };

  // componentDidMount() {
  //   // This run after render
  //   console.log("i am cDM run 3rd");
  //   this.updateNews();
  // };

  componentDidMount() {
    this.updateNews();
  }

  // OPTIONAL: If you allow changing categories via props, you might need this:
  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.updateNews(); // Refetch when category changes
      document.title = `SuperNews - ${this.capitalize(
        this.props.category
      )} News`;
    }
  }

  render() {
    // console.log("I am render, run 2nd ");
    const { articles, loading, hasMoreData } = this.state;
    return (
      <>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={hasMoreData && articles.length < this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen all News</b>
            </p>
          }
        >
          <div className="container my-3">
            <h1>
              SuperNews - Top {this.capitalize(this.props.category)} Headlines
            </h1>

            {!loading && (
              <div
                className="my-5 row row-cols-4 row-gap-5"
                style={{ minHeight: "1000px" }}
              >
                {articles.map((news) => {
                  // new objects and url exits before rendering
                  if (!news || !news.url) return null;

                  return (
                    <div className="col" key={news.url}>
                      <NewsItem
                        title={news.title || "Unknown"}
                        description={news.description || "Unknown"}
                        imageURL={
                          news.urlToImage ||
                          "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
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
            )}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
