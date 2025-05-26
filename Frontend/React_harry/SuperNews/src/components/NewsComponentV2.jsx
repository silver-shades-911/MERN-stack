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
    this.state = {
      articles: [],
      loading: true, // Start with loading true for initial fetch
      page: 1,
      totalResults: 0,
      hasMoreData: true, // Add a flag to control 'hasMore' more directly
    };
    document.title = `SuperNews - ${this.capitalize(this.props.category)} News`;
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=1&pageSize=${pageSize}`; // Always start at page 1
    this.setState({ loading: true }); // Show main spinner on initial load/category change

    try {
        let data = await fetch(url);
        let parsedData = await data.json();

        if (parsedData.status === "ok") {
            const initialArticles = parsedData.articles
                ? parsedData.articles.filter(article => article !== null) // Filter nulls
                : [];

            this.setState({
                articles: initialArticles,
                totalResults: parsedData.totalResults,
                loading: false,
                page: 1, // Reset page to 1
                // Check if initial fetch already covers totalResults or is empty
                hasMoreData: initialArticles.length < parsedData.totalResults && initialArticles.length > 0,
            });
        } else {
            console.error("NewsAPI Error:", parsedData.message);
            this.setState({ loading: false, hasMoreData: false }); // Stop on API error
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        this.setState({ loading: false, hasMoreData: false }); // Stop on network error
    }
  }

  fetchMoreData = async () => {
    // If we already know there's no more data, just return.
    if (!this.state.hasMoreData) {
        return;
    }

    const { country, category, pageSize } = this.props;
    const nextPage = this.state.page + 1; // Calculate next page
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb&page=${nextPage}&pageSize=${pageSize}`;

    try {
        let data = await fetch(url);
        let parsedData = await data.json();

        if (parsedData.status === "ok") {
            const fetchedArticles = parsedData.articles
                ? parsedData.articles.filter(article => article !== null) // Filter nulls
                : [];

            // If API returns 0 articles, we've reached the end.
            if (fetchedArticles.length === 0) {
                this.setState({ hasMoreData: false });
                return;
            }

            this.setState((prevState) => {
                // Filter out duplicates based on URL before concatenating
                const newArticles = fetchedArticles.filter(newArticle =>
                    !prevState.articles.some(existingArticle => existingArticle.url === newArticle.url)
                );

                const updatedArticles = prevState.articles.concat(newArticles);

                return {
                    articles: updatedArticles,
                    page: nextPage, // Update the page number
                    // Keep fetching if current length is less than total AND last fetch returned articles
                    hasMoreData: updatedArticles.length < prevState.totalResults,
                };
            });
        } else {
             console.error("NewsAPI Error (fetchMore):", parsedData.message);
             this.setState({ hasMoreData: false }); // Stop on API error
        }
    } catch (error) {
         console.error("Fetch Error (fetchMore):", error);
         this.setState({ hasMoreData: false }); // Stop on network error
    }
  };

  componentDidMount() {
    this.updateNews();
  }

  // OPTIONAL: If you allow changing categories via props, you might need this:
  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.updateNews(); // Refetch when category changes
    }
  }

  render() {
    const { articles, loading, hasMoreData } = this.state;
    return (
      <>
        {/* Show the main spinner only during initial load */}
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          // Use the hasMoreData flag AND check against totalResults
          hasMore={hasMoreData && articles.length < this.state.totalResults}
          loader={<Spinner />} // This spinner shows during scrolling
          // Optional: Add an end message
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container my-3">
            <h1>
              SuperNews - Top {this.capitalize(this.props.category)} Headlines
            </h1>
            {/* Don't show the grid if it's the initial load and no articles yet */}
            {!loading && <div
              className="my-5 row row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-5" // Adjusted row-cols for responsiveness
              style={{ minHeight: "1000px" }}
            >
              {articles.map((news) => {
                // Ensure news object and url exist before rendering
                if (!news || !news.url) return null;
                return (
                  <div
                    className="col"
                    key={news.url} // Use a stable key!
                  >
                    <NewsItem
                      title={news.title || ""} // Use empty string as fallback
                      description={news.description || ""}
                      imageURL={
                        news.urlToImage || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                      }
                      newsURL={news.url}
                      author={news.author}
                      publishedAt={news.publishedAt}
                      source={news.source.name}
                    />
                  </div>
                );
              })}
            </div>}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}