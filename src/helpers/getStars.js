const Handlebars = require('handlebars/runtime');

export default function(stars) {
  let template = '';
  for (let i = 0; i < stars; i++) {
    template += `<li class="hotel-card__star"><i class="material-icons">star</i></li>`;
  }
  return new Handlebars.SafeString(template);
};
