const _ = require('lodash');
const capitalize = (str) => {
  const result = _.startCase(_.camelCase(str));
  return result
}

const validator = (requestBody, res) => {
  console.log('to be completed')
}

module.exports = validator;