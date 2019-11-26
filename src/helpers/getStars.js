const Handlebars = require('handlebars/runtime');
/**
 * Returns stars list template based on the num of stars passed.
 * @param {number} stars - No of stars to be added in template.
 */
export default function(stars) {
  let template = '';
  for (let i = 0; i < stars; i++) {
    template += `<li class="hotel-card__star"><i class="material-icons">star</i></li>`;
  }
  return new Handlebars.SafeString(template);
}
