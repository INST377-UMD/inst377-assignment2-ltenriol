let breeds = [];

//Fetching the dogs
async function fetchDogs() {
  const url = "https://dogapi.dog/api/v2/breeds";
  const response = await fetch(url);
  const data = await response.json();
  breeds = data.data; 

  const buttonContainer = document.getElementById("dogButtons");

  breeds.forEach((breed) => {
    const button = document.createElement("button");
    button.textContent = breed.attributes.name;
    button.setAttribute("class", "button-74");
    button.onclick = () => showBreedInfo(breed);
    buttonContainer.appendChild(button);
  });
}


  // Displaying the dogs information
  function showBreedInfo(breed) {
    document.getElementById("dogName").textContent = breed.attributes.name || "Not Available";
    document.getElementById("dogDesc").textContent = breed.attributes.description || "Not Available";
    document.getElementById("minLife").textContent = 'Min Life: ' + breed.attributes.life.min || "Not Available";
    document.getElementById("maxLife").textContent = 'Max Life: ' + breed.attributes.life.max || "Not Available";
    document.getElementById("dogInfo").style.display = "block";
  }

  fetchDogs();