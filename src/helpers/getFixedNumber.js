/**
 * Returns number after rounding off to 1 decimal place.
 * @param {number} num - Decimal number to be converted.
 */
export default function(num) {
  return parseFloat(num.toFixed(1));
}
