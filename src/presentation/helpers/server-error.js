module.exports = class ServerError extends Error {
  constructor () {
    super('Server Error, try again!')
    this.name = 'ServerError'
  }
}
