import '../styles/index.scss'
var template = require('../partials/hotel-card.handlebars');

const axios = require('axios');
const HandleBars = require('handlebars');

var hotel = {
  "id": "5a38d166-7822-4708-985c-e2eb34091e9c",
  "name": "sed occaecati rerum",
  "country": "Macedonia",
  "city": "East Lethaside",
  "price": 271,
  "images": [
    "http://lorempixel.com/640/480/city?67640",
    "http://lorempixel.com/640/480/city?95647",
    "http://lorempixel.com/640/480/city?9624",
    "http://lorempixel.com/640/480/city?89223",
    "http://lorempixel.com/640/480/city?32129",
    "http://lorempixel.com/640/480/city?90471",
    "http://lorempixel.com/640/480/city?61731",
    "http://lorempixel.com/640/480/city?78899",
    "http://lorempixel.com/640/480/city?74413"
  ],
  "date_start": "2019-11-11T06:55:53.756Z",
  "date_end": "2020-02-25T15:12:50.222Z",
  "stars": 3,
  "rating": 2.2992174121069806,
  "description": "Necessitatibus natus enim maiores sed. Itaque id voluptatem. Qui ex rerum libero. Id commodi quis odio assumenda sint atque in rerum asperiores."
}

const count = 25;
const url = `http://fake-hotel-api.herokuapp.com/api/hotels?count=${count}`;
axios.get(url)
  .then(function (response) {
    // handle success
    console.log('Success: ', response);
    const data = transformData(response.data);
    const templateData = template({"hotels": data});

    document.getElementById("content").innerHTML += templateData;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

var transformData = function(data) {
  return data.map(hotel => {
    const stars = Array.from({length: hotel.stars}, (_, i) => i);
    return {
      id: hotel.id,
      name: hotel.name,
      location: `${hotel.city}, ${hotel.country}`,
      stars,
      rating: hotel.rating.toFixed(1),
      price: hotel.price,
      images: hotel.images,
    }
  })
}
