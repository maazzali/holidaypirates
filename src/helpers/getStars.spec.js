import getStars from './getStars';
const Handlebars = require('handlebars/runtime');

describe('Get Stars handlbars template helper', function() {

  let template;
  beforeEach(function() {
    template = `<li class="hotel-card__star"><i class="material-icons">star</i></li>`;
  });

  it('will return the same template 2 times in a handlebars safe string', function() {
    const input = 2;
    const output = new Handlebars.SafeString(template + template);
    expect(getStars(input)).toEqual(output);
  });
});
