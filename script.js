// Your API key for CoinAPI
const API_KEY = "19B47FF9-DFC2-4C66-B648-49794AB2C265";

// The base URL for CoinAPI
const BASE_URL = "https://rest.coinapi.io/v1/exchangerate";

// Get the elements where we want to show the prices
const bitcoinElement = document.getElementById("bitcoin");
const ethereumElement = document.getElementById("ethereum");
const dogecoinElement = document.getElementById("dogecoin");

// A function to fetch prices for a specific cryptocurrency
function fetchPrice(crypto, element) {
  // Create the URL for the specific cryptocurrency
  const url = `${BASE_URL}/${crypto}/USD`;

  // Fetch data from the API
  fetch(url, {
    headers: { "X-CoinAPI-Key": API_KEY }, // Send the API key with the request
  })
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
      // Update the price in the HTML
      element.textContent = data.rate.toFixed(2);
    })
    .catch((error) => {
      // If there is an error, log it and show "Error" on the page
      console.error("Error fetching price for", crypto, error);
      element.textContent = "Error";
    });
}

// A function to update all cryptocurrency prices
function updateCryptoPrices() {
  fetchPrice("BTC", bitcoinElement); // Update Bitcoin price
  fetchPrice("ETH", ethereumElement); // Update Ethereum price
  fetchPrice("DOGE", dogecoinElement); // Update Dogecoin price
}

// Run the function when the page loads
updateCryptoPrices();

// Update the prices every 1 minute (60000 milliseconds)
setInterval(updateCryptoPrices, 60000);
