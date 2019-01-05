const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
   // The next function will be the route handler in this case
   // since this is a middleware
  await next();

  clearHash(req.user.id);
}
