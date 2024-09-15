import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import "./App.css";

// Mock News Data
const mockNews = [
  {
    title: "Mock News Title 1",
    description: "This is a mock description for news item 1.",
    image: "https://via.placeholder.com/300",
    url: "#",
  },
  {
    title: "Mock News Title 2",
    description: "This is a mock description for news item 2.",
    image: "https://via.placeholder.com/300",
    url: "#",
  },
  {
    title: "Mock News Title 3",
    description: "This is a mock description for news item 3.",
    image: "https://via.placeholder.com/300",
    url: "#",
  },
  {
    title: "Mock News Title 4",
    description: "This is a mock description for news item 4.",
    image: "https://via.placeholder.com/300",
    url: "#",
  },
  {
    title: "Mock News Title 5",
    description: "This is a mock description for news item 5.",
    image: "https://via.placeholder.com/300",
    url: "#",
  },
];

function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("world");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchNews(searchQuery);
  }, [searchQuery]);

  const fetchNews = async query => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&max=50&apikey=4f0cfd1813cfd0c8e010919f17be958b`
      );
      setNews(response.data.articles);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setErrorMessage("API limit exceeded. Loading mock news data.");
        setNews(mockNews); // Load mock data
      } else {
        setErrorMessage("Error fetching news. Loading mock news data.");
        setNews(mockNews); // Load mock data for other errors as well
      }
      console.error("Error fetching news: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
  };

  if (loading) {
    return <div className="loading">Please Wait...</div>;
  }

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      {errorMessage && <h2 className="error-message">{errorMessage}</h2>}
      <NewsList news={news} />
      <Footer />
    </div>
  );
}

export default App;
