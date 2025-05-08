async function getRedditData() {
  const url = "https://tradestie.com/api/v1/apps/reddit?date=2022-04-03";
  const response = await fetch(url);
  const result = await response.json();

  const redditTableBody = document.getElementById("redditTableContent");

  //Creating the table
  function tableCreate(data) {
    //Draw 5 top tickers
    data.slice(0, 5).forEach((item) => {
      const row = document.createElement("tr");

      //TICKER COLUMN
      const ticker = document.createElement("td");
      const link = document.createElement("a");
      link.href = `https://finance.yahoo.com/quote/${item.ticker}`;
      link.textContent = item.ticker;
      link.target = "_blank";
      ticker.appendChild(link);
      row.appendChild(ticker);

      //TITLE COLUMN
      const comments = document.createElement("td");
      comments.textContent = item.no_of_comments;
      row.appendChild(comments);

      //SENTIMENT COLUMN
      const sentiment = document.createElement("td");
      const sentimentImage = document.createElement("img");
      if (item.sentiment.toLowerCase() === "bullish") {
        sentimentImage.src =
          "https://cdn.iconscout.com/icon/premium/png-256-thumb/bullish-1850232-1570439.png";
        sentimentImage.alt = "Bullish";
      } else if (item.sentiment.toLowerCase() === "bearish") {
        sentimentImage.src =
          "https://cdn.iconscout.com/icon/premium/png-256-thumb/bearish-1850233-1570440.png";
        sentimentImage.alt = "Bearish";
      }
      sentiment.appendChild(sentimentImage);
      row.appendChild(sentiment);

      
      redditTableBody.appendChild(row);
    });
  }

  tableCreate(result);
}

getRedditData();
