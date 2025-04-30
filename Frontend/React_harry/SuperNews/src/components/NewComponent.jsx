import React, { Component } from 'react'
import NewsItem from "./NewsItem.jsx"

export default class NewComponent extends Component {
  render() {
    return (
      <div>
        News component
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}
