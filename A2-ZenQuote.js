const url = "https://zenquotes.io/api/random";

// Fetching the quote
async function fetchQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const quote = data[0].q;
    const author = data[0].a;

    document.getElementById("quoteText").innerHTML = `"${quote}"  <br><br> - ${author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

fetchQuote(url);