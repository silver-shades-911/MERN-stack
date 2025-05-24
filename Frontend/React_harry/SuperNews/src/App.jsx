import { useState } from "react";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import NewsComponent from "./components/NewsComponent.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent
                  pageSize={12}
                  country="us"
                  key="general"
                  category="general"
                />
              }
            >
             
            </Route>
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  pageSize={12}
                  country="us"
                  key="business"
                  category="business"
                />
              }
            >
             
            </Route>
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent
                  pageSize={12}
                  country="us"
                  category="entertainment"
                  key="entertainment"
                />
              }
            >
             
            </Route>
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent
                  pageSize={12}
                  country="us"
                  key="sports"
                  category="sports"
                />
              }
            >
             
            </Route>
            <Route
              exact
              path="/health"
              element={
                <NewsComponent
                  pageSize={12}
                  country="us"
                  key="health"
                  category="health"
                />
              }
            >
             
            </Route>
            <Route
              exact
              path="/science"
              element={
                <NewsComponent
                  pageSize={12}
                  country="us"
                  key="science"
                  category="science"
                />
              }
            >
             
            </Route>
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  pageSize={12}
                  country="us"
                  key="technology"
                  category="technology"
                />
              }
            >
             
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
