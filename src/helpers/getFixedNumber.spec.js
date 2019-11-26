import * as getFixedNumber from './getFixedNumber';

describe('Get fixed number helper', function() {

  it('should return 3.4 for 3.44645', function() {
    const input = 3.44645;
    const output = 3.4;
    expect(getFixedNumber(input)).toBe(output);
  });

  it('should return 3.5 for 3.45645', function() {
    const input = 3.45645;
    const output = 3.5;
    expect(getFixedNumber(input)).toBe(output);
  });

  it('should return 3.5 for 3.44645', function() {
    const input = 3.46645;
    const output = 3.5;
    expect(getFixedNumber(input)).toBe(output);
  });
});
