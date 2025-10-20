var icon = document.getElementById("icon");
var sun = document.getElementsByClassName("fa-sun");
var container = document.querySelector(".container");

// Light and Dark Theme Toggle
icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.innerHTML = "<i class='fa-solid fa-moon'></i>";
        container.style.backgroundImage = 'none';
        document.body.style.backgroundColor = "#f8f9fa";
        document.body.style.color = "#e0e0e0";
        icon.style.cursor = "pointer";
    } else {
        icon.innerHTML = "<i class='fa-solid fa-sun'></i>";
        container.style.backgroundImage = 'url(./images/images/background.png)';
    }
}   

// Crypto Price Fetching

async function getPrices() {
  const symbols = "BTC,ETH,DOGE"; // add more if needed
  const response = await fetch(`https://rest.coincap.io/v3/price/bysymbol/${symbols}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch prices: " + response.status);
  }

  const data = await response.json();
    document.getElementById("btc-price").innerText = parseFloat(data.data[0]).toFixed(4);
    document.getElementById("eth-price").innerText = parseFloat(data.data[1]).toFixed(4);
    document.getElementById("doge-price").innerText = parseFloat(data.data[2]).toFixed(4);
}

getPrices();
