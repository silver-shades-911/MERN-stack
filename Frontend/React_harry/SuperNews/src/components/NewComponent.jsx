import React, { Component } from "react";
import NewsItem from "./NewsItem.jsx";

export default class NewComponent extends Component {

  constructor() {
    super();
    console.log("Hello i am constructor, run 1st");
    this.state = {  // initial values setting
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    // This run after render
    console.log("i am cDM run 3rd");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b6cfd6a284ee4fa48cdcaed245e77ddb";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
    });
  }

  render() {
    console.log("I am render, run 2nd ");
    return (
      <div className="container my-3">
        <h1>Super News - top Headlines</h1>
        <div className="my-5 row row-cols-4 row-gap-5">
          {this.state.articles
            .filter((news) => !Object.values(news).some((key) => key === null)) // Object.values method convert that objects all values into array 
            .map((news) => {
              return (
                <div className="col" key={news.url}>
                  <NewsItem
                    title={news.title}
                    description={news.description}
                    imageURL={news.urlToImage}
                    newsURL={news.url}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
