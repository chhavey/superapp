import React, { useState, useEffect } from "react";
import styles from "./news.module.css";

function News() {
  const [news, setNews] = useState([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    // const API_Key = "05b38fe0d73c48989a8a37f2b6c6b937";
    const API_URL =
      "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
    // "https://newsapi.org/v2/everything?q=apple&from=2023-10-09&to=2023-10-09&sortBy=popularity&apiKey=05b38fe0d73c48989a8a37f2b6c6b937";

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles && data.articles.length > 0) {
          // Set the fetched news data in the state
          setNews(data.articles);
        }
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const timer = setTimeout(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentNewsIndex, news]);

  const handleClick = (url) => {
    // Open the news article URL in a new tab/window
    window.open(url, "_blank");
  };

  if (news.length > 0 && currentNewsIndex < news.length) {
    const apiDateString = news[currentNewsIndex].publishedAt;
    const apiDate = new Date(apiDateString);
    const formattedDate = `${(apiDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${apiDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${apiDate.getFullYear()} | ${apiDate.toLocaleString(
      "en-US",
      { hour: "numeric", minute: "numeric", hour12: true }
    )}`;

    return (
      <div
        className={styles.newsCard}
        onClick={() => handleClick(news[currentNewsIndex].url)}
      >
        {news.length > 0 && (
          <div
            className={styles.newsHeader}
            style={{
              backgroundImage: `url(${news[currentNewsIndex].urlToImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={styles.newsTitle}>
              {news[currentNewsIndex].title}
              <p className={styles.newsDate}>{formattedDate}</p>
            </div>
          </div>
        )}
        <div className={styles.newsDescription}>
          {news[currentNewsIndex].description}
        </div>
      </div>
    );
  }
}

export default News;
