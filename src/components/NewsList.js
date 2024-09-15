import React from "react";
import NewsItem from "./NewsItem";
import "./NewsList.css";

function NewsList({ news }) {
  return (
    <div className="news-list">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
