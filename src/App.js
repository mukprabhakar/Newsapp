import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <Router>
      <NavBar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Switch>
        {/* Default route "/" shows general category */}
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        {/* Map through categories for routes */}
        {categories.map((category) => (
          <Route
            key={category}
            path={`/${category}`}
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={category}
                pageSize={pageSize}
                country="in"
                category={category}
              />
            }
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
