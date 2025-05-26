import { useState } from "react";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import NewsComponent from "./components/NewsComponent.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  apiKey = import.meta.env.VITE_API_KEY;

  state = {
    progress: 0,
  };

  // method to set progress , and passing this as props to newsComponent
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent
                  pageSize={12}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="us"
                  key="general"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  pageSize={12}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="us"
                  key="business"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent
                  pageSize={12}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="us"
                  category="entertainment"
                  key="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent
                  pageSize={12}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="us"
                  key="sports"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <NewsComponent
                  pageSize={12}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="us"
                  key="health"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <NewsComponent
                  pageSize={12}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="us"
                  key="science"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  pageSize={12}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="us"
                  key="technology"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
