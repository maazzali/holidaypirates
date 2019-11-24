const Handlebars = require('handlebars/runtime');
const axios = require('axios');

export default function(id) {
  let template = '';

  const url = `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`;
 /* axios.get(url)
    .then(function (response) {
      const reviewsArr = response.data;
      console.log('REviews', reviewsArr);
      reviewsArr.forEach(review => {
        template += `<li class="review">${review.name}</li>`;
      });*/
      return new Handlebars.SafeString(template);

};
