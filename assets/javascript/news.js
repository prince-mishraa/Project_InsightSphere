fetch('/.netlify/functions/getNews')
  .then(res => res.json())
  .then(data => {
    const articles = data.articles;
    const trendingNewsDiv = document.getElementById("trending-news");

    articles.forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");

      const image = document.createElement("img");
      image.classList.add("sidebar-image");
      image.src = article.urlToImage || 'fallback.jpg';
      image.alt = "News Image";

      const title = document.createElement("h4");
      title.textContent = article.title;

      const link = document.createElement("a");
      link.href = article.url;
      link.target = "_blank";
      link.textContent = "Read more";

      newsItem.appendChild(image);
      newsItem.appendChild(title);
      newsItem.appendChild(link);

      trendingNewsDiv.appendChild(newsItem);
    });
  })
  .catch(err => console.error("Failed to load trending news:", err));
