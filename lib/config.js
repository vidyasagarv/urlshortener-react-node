var config = {};

// let port = process.env.PORT || 3000;
// 'http://localhost:3000/';
config.db = {};
config.webhost = 'https://crispurl.herokuapp.com/';

config.db.host = 'admin:admin@ds153752.mlab.com:53752';
config.db.name = 'url_shortener';

module.exports = config;
