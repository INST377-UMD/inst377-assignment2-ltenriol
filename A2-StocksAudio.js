if (annyang) {
  // Create commands
  const commands = {
    "Hello.": () => {
      alert("Hello World!");
    },
    // Changing page color
    "change the color to *color": (color) => {
      const cleanColor = color
        .trim()
        .toLowerCase()
        .replace(/[^\w\s]/gi, ""); // remove punctuation
      document.body.style.backgroundColor = cleanColor;
    },
    // Navigating page
    "navigate to *page": (page) => {
      const lowercase = page.toLowerCase();
      if (lowercase.includes("home")) window.location.href = "A2-Home.html";
      else if (lowercase.includes("dogs"))
        window.location.href = "A2-Dogs.html";
      else if (lowercase.includes("stocks"))
        window.location.href = "A2-Stocks.html";
    },
    // Loading up stock
    "look up *stock": (stock) => {
      const tickerInput = document.getElementById("ticker");
      const cleanStock = stock.trim().replace(/[^\w]/g, "").toUpperCase();
      tickerInput.value = cleanStock;
      generateChart();
    }

  };

  annyang.addCommands(commands);

  // Hearing check in console
  annyang.addCallback("result", function (phrases) {
    console.log("Heard:", phrases);
  });

  annyang.start();
}
