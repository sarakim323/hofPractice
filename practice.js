// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
// I - array of numbers
// O - total number of values that are multiples of five
// C - use _.each
// E -
// Pseudocode
  // create a resulting variable
  // iterate over the array
  // if the number is a multiple of five, add 1 to the resulting variable
  // return the resulting variable
var multiplesOfFive = function (numbers) {
  // using _.each()
  var result = 0;
  _.each(numbers, function(element) {
    if (element % 5 === 0) {
      result++;
    }
  });
  return result;
  // using _.filter()
  // var result = _.filter(numbers, function(element) {
  //   if (element % 5 === 0) {
  //     return true;
  //   }
  // });
  // return result.length;
};

// use _.each to build an array containing only tweets belonging to a specified user.
// I - tweets (array of objects), user (name)
// O - array containing only tweets belonging to a specified user
// C - use _.each
// E -
// Pseudocode
  // create a result variable
  // iterate over the array
    // if the property "user" matches the user parameter, push the element into the result variable
  // return the result variable
var getUserTweets = function(tweets, user) {
  // using _.each()
  var result = [];
  _.each(tweets, function(element, index, array) {
    if (array[index].user === user) {
      result.push(element);
    }
  });
  return result;
  // using _.filter()
  // return _.filter(tweets, function(element, index, array) {
  //   if (array[index].user === user) {
  //     return true;
  //   }
  // });
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
// I - array of fruits, target Fruit string
// O - array with only the desired fruit
// C - use _.filter, do not create new array
// E -
// Pseudocode
  // filter the fruit array
    // if the element matches the targetFruit, return true
  // return the filter function
var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function(element) {
    if (element === targetFruit) {
      return true;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
// I - fruits array, letter (string)
// O - array with only fruits starting with the given letter
// C - use _.filter
// E -
// Pseudocode
  // filter the fruit array
    // if the element matches the letter, return true
  // return the filter function
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(element) {
    if (element[0] === letter) {
      return true;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
// I - dessert array
// O - array containing only cookie-type desserts
// C - use _.filter
// E -
// Pseudocode
  // filter the dessert array
    // if the dessert type is cookie, return true
  // return the filtered array
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(element, index, array) {
    if (array[index].type === 'cookie') {
      return true;
    }
  });
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(element, index, array) {
    if (array[index].user === user) {
      return true;
    }
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
// I - fruits array
// O - new array containing strings converted to uppercase letters
// C - use _.map
// E -
// Pseudocode
  // use _.map()
  // convert each element string to uppercase letters
  // return _.map()
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(element) {
    return element.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
// I - array of dessert objects
// O - new array of objects that have a new glutenFree property with a boolean value
// C - use _.map()
// E -
// Pseudocode
  // use _.map
    // add new glutenFree property with a boolean value to each object element
      // items that contain flour = false
  // return _.map
var glutenFree = function (desserts) {
  return _.map(desserts, function(element, index, array) {
    if (array[index]['ingredients'].includes('flour')) {
      array[index]['glutenFree'] = false;
    } else {
      array[index]['glutenFree'] = true;
    }
    return array[index]; // this is the element that is being put into the new result array
  });
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
// I - array of tweet objects
// O - new array of strings containing only the message properties
// C - use _.map
// E -
// Pseudocode
  // use _.map
    // look up message property for each element
  // return _.map
var allUserMessages = function(tweets) {
  return _.map(tweets, function(element) {
    return element['message'];
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
// I - groceries (array of objects), coupon (number)
// O - array of items with sale price property
// C - round any decimals to 2 places
// E -
// Pseudocode
  // use _.map()
    // remove dollar sign - first character of the price string
    // convert price type from string to number
    // calculate sale price
    // round the sale price to 2 decimal places
    // create a new variable and add dollar sign and sale price
    // add sale price property to each element
    // return the element
  // return _.map()
var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(element) {
    var originalPrice = parseFloat(element['price'].slice(1));
    var salePrice = originalPrice - (originalPrice * coupon);
    salePrice = salePrice.toFixed(2);
    element['salePrice'] = '$' + salePrice;
    return element;
    // var salePrice = Number(element['price'].slice(1) - (element['price'] * coupon));
    // salePrice = salePrice.toFixed(2);
    // element['salePrice'] = '$' + salePrice;
    // return element;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {

};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {

};
