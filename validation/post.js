const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 1, max: 500 })) {
    errors.text = "Post must be between 1 and 500 characers";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "text field is require";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
