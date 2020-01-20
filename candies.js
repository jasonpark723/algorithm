/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  var unique = {};
  var maxCandy = candies.length / 2;
  for (var i = 0; i < candies.length; i++) {
    var candy = candies[i];

    if (!unique[candy]) {
      unique[candy] = true;
    }
  }
  var count = 0;
  for (key in unique) {
    if (unique.hasOwnProperty(key)) {
      count++;
    }
  }
  if (count < maxCandy) {
    return count;
  } else {
    return maxCandy;
  }
};
