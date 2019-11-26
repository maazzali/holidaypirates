import '../styles/index.scss';

import { getHotelsListing, getHotelReviews } from './services';

const hotelsTemplate = require('../partials/hotel-card.handlebars');
const reviewsTemplate = require('../partials/reviews.handlebars');
const errorTemplate = require('../partials/error.handlebars');


/**
 * Vanilla Debounce implementation
 * @param {function} func - Function to be called when debounced.
 * @param {number} wait - Timeout value in milliseconds.
 */
function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
 * Register event handlers for price and ratings
 */
function registerHandlersForFilters() {
  const ratingFilter = document.getElementById('ratings-filter');
  ratingFilter.addEventListener("change", () => {
    addHotelsListing(undefined, ratingFilter.value);
  });

  const priceFilter = document.getElementById('price-filter');
  const priceFilterOutput = document.getElementById("price-filter-text");
  const debounced = debounce(function () {
    addHotelsListing(priceFilter.value);
  }, 500);
  priceFilter.addEventListener("input", () => {
    priceFilterOutput.innerHTML = `$${priceFilter.value}`;
  });
  priceFilter.addEventListener("input", debounced);
  priceFilterOutput.innerHTML = `$${priceFilter.value}`; // Display the default slider value
}

/**
 * Get a list of hotels available.
 * @param {number} maxPrice - Maximum offer price for hotels.
 * @param {number} minStars - Minimum stars for hotels.
 */
function addHotelsListing(maxPrice, minStars) {
  const contentElem = document.getElementById("content");
  contentElem.innerHTML = '<div class="loader__container"><div class="loader"></div></div>';
  const count = 25;
  getHotelsListing(maxPrice, minStars).then(function (response) {
    let hotels = response.data;
    // API doesn't consider multiple query params at a time.
    if (hotels.length > count) {
      hotels = hotels.slice(0, count);
    }
    const templateData = hotelsTemplate({"hotels": hotels});
    contentElem.innerHTML = templateData;
  }, function(error) {
    const data = errorTemplate({"error": error.response});
    contentElem.innerHTML = data;
  })
}

/**
 * Register handler for event delegation
 */
function registerHandlersForDetails() {
  document.getElementById('content').addEventListener('click', (evt) => {
    if (evt.target.id || evt.target.parentElement.id) {
      const target = evt.target.id ? evt.target : evt.target.parentElement;
      const detailsElem = document.getElementById('detail-' + target.id);
      if (detailsElem && target.className === 'view-details__button' && detailsElem.style.maxHeight !== '600px' ) {
        detailsElem.style.maxHeight = "600px";
        appendReviewsInDetail(target.id);
      } else if (detailsElem && target.className === 'details__close-button'){
        detailsElem.style.maxHeight = "0px";
      }
    }
  });
}

/**
 * Register handler for image slider
 */
function registerHandlersForImageSlider() {
  document.getElementById('content').addEventListener('click', (evt) => {
    const targetClass = evt.target.className;
    if (targetClass.includes('image__arrow--left') || targetClass.includes('image__arrow--right')) {
      const images = evt.target.parentElement.querySelectorAll('.image');
      if (images.length < 2) return;
      let changed = false;
      images.forEach((image, idx) => {
        if (image.className.includes('active') && !changed) {
          image.className = 'image';
          changed = true;

          if (targetClass.includes('image__arrow--left')) {
            if (idx !== 0) images[idx - 1].className = 'image active';
            else images[images.length - 1].className = 'image active';
          }

          if (targetClass.includes('image__arrow--right')) {
            if (idx !== images.length - 1) images[idx + 1].className = 'image active';
            else images[0].className = 'image active';
          }
        }
      });
    }
  });
}

/**
 * Append list of reviews in hotel details
 * @param {number} id - Hotel id for fetching reviews.
 */
function appendReviewsInDetail(id) {
  const reviewListElem = document.getElementById('detail-' + id).querySelector(".details__reviews-list");
  reviewListElem.innerHTML = '<div class="loader__container"><div class="loader"></div></div>';
  getHotelReviews(id).then((response) => {
    const templateData = reviewsTemplate({reviews: response.data});
    reviewListElem.innerHTML = templateData;
  }, () => {

  })
}


window.onload = function() {
  registerHandlersForFilters();
  registerHandlersForDetails();
  registerHandlersForImageSlider();
  const ratings  = document.getElementById('ratings-filter').value;
  // Default hotels listing
  addHotelsListing(undefined, ratings);
};
