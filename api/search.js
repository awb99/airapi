var request = require('request'),
  _ = require('lodash'),
  configs = require('../configs/configs'),
  serialize = require('../helpers/serialize'),
  Promise = require('bluebird');

/**
 * Search hostings
 * @param  {Object} options - Search options
 * @return {Promise} - contains JSON response if success
 *
 * Available search options
 * options = {
 *   checkin: {String},
 *   checkout: {String},
 *   guests: {Number},
 *   page: {Number},
 *   location: {String}, e.g: 'New York, NY' or 'Seattle, WA'
 *   price_min: {Number},
 *   price_max: {Number},
 *   min_bedrooms: {Number},
 *   min_bathrooms: {Number},
 *   min_beds: {Number},
 *   superhost: {Boolean},
 *   hosting_amenities: {Array of id}, e.g: [1,4]
 *   property_type_id: {Array of id}, e.g: [1]
 *   languages: {Array of id}, e.g: [1,64]
 *   keywords: {String}, e.g: 'ocean,view,balcony'
 *   room_types: {Array}, e.g: ['Entire home/apt', 'Private room', 'Shared room']
 *   ib: {Boolean}, instant-book,
 *   neighborhoods: {Array}, e.g: ['Belltown', 'Queen Anne']
 * }
 */

var myrequest = require("./myrequest").myrequest;

function search(options) {

  return new Promise(function(resolve, reject) {

    // Make sure search options is provided
    if (!options || !_.isObject(options)) {
      reject('Must provide search options');
    }

    var requestConfigs = _.assign({}, configs.DEFAULT_REQUEST_CONFIGS, {
      url: configs.SEARCH_URL + '?' + serialize(options)
    });

    console.log("airbnb room.discover request url: " + requestConfigs.url);

    // Make request
    myrequest(requestConfigs, (err, data) => {
      if (!err) {
        if (res.statusCode == 200) {
            resolve(data);
        }       
      } else  {
        reject(data);
      }
            
    });
  });
}

module.exports = search;
