import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import NewsComponent from "./components/NewsComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import LoadingBar from "react-top-loading-bar";

let App = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  let [progress, setProgress] = useState(0);

  // // method to set progress , and passing this as props to newsComponent
  // setProgress = (progress) => {
  //   this.setState({ progress: progress });
  // }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsComponent
                pageSize={12}
                apiKey={apiKey}
                setProgress={setProgress}
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
                apiKey={apiKey}
                setProgress={setProgress}
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
                apiKey={apiKey}
                setProgress={setProgress}
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
                apiKey={apiKey}
                setProgress={setProgress}
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
                apiKey={apiKey}
                setProgress={setProgress}
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
                apiKey={apiKey}
                setProgress={setProgress}
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
                apiKey={apiKey}
                setProgress={setProgress}
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
};

export default App;
