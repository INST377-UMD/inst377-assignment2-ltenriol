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
          .replace(/[^\w\s]/gi, "");
        document.body.style.backgroundColor = cleanColor;
      },
      // Navigating page
      "navigate to *page": (page) => {
        const lowercase = page.toLowerCase();
        if (lowercase.includes("home"))
          window.location.href = "A2-Home.html";
        else if (lowercase.includes("dogs"))
          window.location.href = "A2-Dogs.html";
        else if (lowercase.includes("stocks"))
          window.location.href = "A2-Stocks.html";
      },
      // Loading up dog
      "load *dog": (dog) => {
        const cleanDog = dog
          .trim()
          .toLowerCase()
          .replace(/[^\w\s]/g, "");
        const match = breeds.find((b) =>
          b.attributes.name.toLowerCase().includes(cleanDog)
        );
        if (match) {
          showBreedInfo(match);
        } else {
          alert(`${dog} not found`);
        }
      },
    };

    annyang.addCommands(commands);

    // Hearing check in console
    annyang.addCallback("result", function (phrases) {
      console.log("Heard:", phrases);
    });

    annyang.start();
  }