import getRatingtext from './getRatingtext';

describe('Get rating text helper', function() {

  it('should return excellent for 10', function() {
    const input = 10;
    const output = 'excellent';
    expect(getRatingtext(input)).toBe(output);
  });

  it('should return excellent for 9', function() {
    const input = 9;
    const output = 'excellent';
    expect(getRatingtext(input)).toBe(output);
  });

  it('should return excellent for 8.5', function() {
    const input = 8.5;
    const output = 'excellent';
    expect(getRatingtext(input)).toBe(output);
  });

  it('should return good for 8', function() {
    const input = 8;
    const output = 'good';
    expect(getRatingtext(input)).toBe(output);
  });

  it('should return fair for 7', function() {
    const input = 7;
    const output = 'fair';
    expect(getRatingtext(input)).toBe(output);
  });

  it('should return okay for 6', function() {
    const input = 6;
    const output = 'okay';
    expect(getRatingtext(input)).toBe(output);
  });

  it('should return okay for 0', function() {
    const input = 0;
    const output = 'okay';
    expect(getRatingtext(input)).toBe(output);
  });
});
