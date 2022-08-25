
const iFact = document.createElement("h1");

// This is the root url for te Rest APIs
const baseUrl =  "https://catfact.ninja";
// This url gets a particular facts
const itemUrl = `${baseUrl}/fact`;


// This is a config object for the fecth functions
const options = {
      method: "GET",
      headers: {
            Accept: "application/json"
      },
};

// This request gets random fact from the urls

setInterval(() => {
      fetch(itemUrl, options)
      .then((response) => response.json())
      .then((response) => {
         iFact.innerHTML = response.fact
         document.body.appendChild(iFact)
      })
      .catch((err) => console.log(err));  
}, 5000);
