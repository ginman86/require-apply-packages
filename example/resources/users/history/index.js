'use strict'

module.exports = function (app) {
  /**
   * route handler for /history.
   */

  app.use(function *(next) {
    yield* next
    if (this.path === '/users/history' && this.method === 'GET') this.body = 'somehistory'
  })
}
