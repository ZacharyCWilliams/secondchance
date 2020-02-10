const _ = require('lodash');
const capitalize = (str) => {
  const result = _.startCase(_.camelCase(str));
  return result
}

const validator = (requestBody, res) => {
  for (let prop in requestBody) {
    let propValue = requestBody[prop];
    switch (prop) {
      case "name":
        let parsed = propValue.split(" ");
        let noSpaces = parsed.length < 2;
        if (!propValue) {
          return res.status(400).send({
            message: `Name can not be empty`
          });
        } else if (noSpaces) {
          return res.status(400).send({
            message: `Please provide first and last name using a space`
          });
        }
        break;
      case "dob":
        if (!propValue) {
          return res.status(400).send({
            message: `Date of Birth can not be empty`
          });
        }
        break;
      default:
        if (!propValue) {
          return res.status(400).send({
            message: `${capitalize(prop)} can not be empty`
          });
        }
    }
  }
}

module.exports = validator;