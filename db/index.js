const knex = require('knex')({
  client: 'mysql',
  connection: {
    database: 'gallery',
    user:     'root',
    password: ''
  }
});

const getProductImages = function(id, callback) {
  var queries = [];

  queries.push(knex('products').where('id', id));
  queries.push(knex('images').where('product_id', id));

  Promise.all(queries)
  .then(function(results) {
    callback(null, results);
  })
  .catch(function(err) {
    callback(err);
  });
};

module.exports = {
  getProductImages
};