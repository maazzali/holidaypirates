const axios = require('axios');

/**
 * Get a list of hotels available.
 * @param {number} maxPrice - Maximum offer price for hotels.
 * @param {number} minStars - Minimum stars for hotels.
 * @param {number} count - The number of hotel objects to return. Default: random count from 0 to 500.
 */
export const getHotelsListing =  function (maxPrice, minStars) {
  const url = `http://fake-hotel-api.herokuapp.com/api/hotels${maxPrice ? `?max_price=${maxPrice}` : ''}${minStars ? `?min_stars=${minStars}` : ``}`;
  return axios.get(url);
};

/**
 * Get a list of reviews for a specific hotel id
 * @param {string} id - Id of the Hotel to fetch the reviews
 */
export const getHotelReviews = function (id = '') {
  const url = `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`;
  return axios.get(url);
};
