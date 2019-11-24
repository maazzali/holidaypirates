import '../styles/index.scss'

const axios = require('axios');
const template = require('../partials/hotel-card.handlebars');
const errorTemplate = require('../partials/error.handlebars');

function registerEventHandlers() {
  const ratingFilter = document.getElementById('ratings-filter');
  ratingFilter.addEventListener("change", (val) => {
    console.log('Value change');
  });

  const priceFilter = document.getElementById('price-filter');
  const priceFilterOutput = document.getElementById("price-filter-text");
  priceFilterOutput.innerHTML = `$ ${priceFilter.value}`; // Display the default slider value
  priceFilter.addEventListener("input", (val) => {
    console.log('here');
    priceFilterOutput.innerHTML = `$ ${priceFilter.value}`;
  });
}

window.onload = function() {

  registerEventHandlers();
  const count = 25;
  const url = `http://fake-hotel-api.herokuapp.com/api/hotels?count=${count}`;
  axios.get(url)
    .then(function (response) {
      // handle success
      console.log('Success: ', response);
      const templateData = template({"hotels": response.data});
      document.getElementById("content").innerHTML += templateData;

      registerEventHandlers();
      document.getElementById('view-details').addEventListener('click', (evt) => {
        console.log('Button CLicked', evt);
      });
    }, function(error) {
      const data = errorTemplate({"error": error.response});
      document.getElementById("content").innerHTML = data;
    })



};
