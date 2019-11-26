/**
 * Returns the text based on rating value
 * @param {string} rating - Overall rating number
 */
export default function(rating) {
  if (rating >= 8.5) {
    return 'excellent'
  } else if (rating >= 8.0) {
    return 'good'
  } else if (rating >= 7.0) {
    return 'fair'
  } else {
    return 'okay'
  }
};
