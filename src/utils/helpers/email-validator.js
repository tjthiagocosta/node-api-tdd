const MissingParamError = require('../errors/missing-param-error')
const validator = require('validator')

module.exports = class EmailValidator {
  isValid (email) {
    if (!email) {
      throw new MissingParamError('email')
    }
    return validator.isEmail(email)
  }
}
