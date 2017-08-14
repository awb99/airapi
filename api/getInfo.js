var request = require('request'),
  _ = require('lodash'),
  configs = require('../configs/configs'),
  serialize = require('../helpers/serialize'),
  Promise = require('bluebird');


var myrequest = require("./myrequest").myrequest;
/**
 * Get info for a particular hosting
 * @param  {Number, String} hosting - Hosting ID
 * @param  {Function} successCallback - Success callback to invoke
 * @param  {Function} failureCallback - Failure callback to invoke
 * @return {Void} - Hosting info is passed onto callbacks
 */
function getInfo(hostingId) {
  var requestConfigs = _.assign({}, configs.DEFAULT_REQUEST_CONFIGS, {
    url: configs.HOSTING_INFO_URL + '/' + hostingId + '?' + serialize(configs.DEFAULT_REQUEST_PARAMS)
  });
  
  console.log("airapi room.getInfo request url: " + requestConfigs.url);

  return new Promise(function(resolve, reject) {
    // Make request to parse hosting info
    myrequest(requestConfigs, (err, data) => {
      if (!err) {
          resolve(data);
      } else  {
        reject(data);
      }
    });
  });
}

module.exports = getInfo;
