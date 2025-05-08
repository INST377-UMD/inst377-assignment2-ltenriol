  let chart = null;
  const apiKey = "kI0FMTK8l7uRPMX8uQXM3T9s95o2S0yU"; 

  // Formatting to yyyy-mm-dd (FUNCTION)
  function format(date) {
    return date.toISOString().split("T")[0];
  }

  // Get the proper dates for the chart (FUNCTION)
  function getStartDate(n) {
    const date = new Date();
    date.setDate(date.getDate() - n);
    return date;
  }

  // Generating the chart (FUNCTION)
  async function generateChart() {
    const ticker = document.getElementById("ticker").value.toUpperCase();
    const days = parseInt(document.getElementById("timeframe").value);
    const endDate = new Date();
    const startDate = getStartDate(days);

    // Fetching API
    const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${format(startDate)}/${format(endDate)}?adjusted=true&sort=asc&limit=${days}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    //Handling error
    if (!data.results || data.results.length === 0) {
      console.error(`Error fetching data`);
      alert(`An error occured fetching the data. Please try again.`);
      return;
    }

    const labels = data.results.map(item => new Date(item.t).toISOString().split("T")[0]);
    const prices = data.results.map(item => item.c);

    document.getElementById("chartContainer").style.display = "block";
    const ctx = document.getElementById("stockChart").getContext("2d");

    if (chart) chart.destroy();

    // Creating the chart
    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "$ Stock Price",
          data: prices,
          borderColor: "blue",
          backgroundColor: "blue",
          fill: false,
          pointRadius: 3
        }]
      }
    });
  }