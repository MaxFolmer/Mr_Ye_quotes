
const quoteElement = document.querySelector(".quote");
const button = document.querySelector(".header_btn");

function updateQuote() {
  fetch("https://api.kanye.rest")
    .then((response ) => response.json())
    .then((data)  => {
      return (quoteElement.textContent = data.quote);
    });
}
button.addEventListener("click", updateQuote);