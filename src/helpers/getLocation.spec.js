import getLocation from './getLocation';

describe('Get location helper', function() {

  it('should return Isb, Pakistan for Isb and Pakistan', function() {
    const input1 = 'Isb';
    const input2 = 'Pakistan';
    const output = input1 + ', ' + input2;
    expect(getLocation(input1, input2)).toBe(output);
  });

  it('should return Berlin, Germany for Berlin and Germany', function() {
    const input1 = 'Berlin';
    const input2 = 'Germany';
    const output = input1 + ', ' + input2;
    expect(getLocation(input1, input2)).toBe(output);
  });
});
