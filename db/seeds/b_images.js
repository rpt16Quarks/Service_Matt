var faker = require('faker');


var productImages = function(knex, imgCnt, id) {
  //Variable for set of S3 stored images
  var imageList = [
    {img_small: 'image_small0', img_large: 'image_large0', img_zoom: 'image_zoom0'},
    {img_small: 'image_small1', img_large: 'image_large1', img_zoom: 'image_zoom1'},
    {img_small: 'image_small2', img_large: 'image_large2', img_zoom: 'image_zoom2'},
    {img_small: 'image_small3', img_large: 'image_large3', img_zoom: 'image_zoom3'},
    {img_small: 'image_small4', img_large: 'image_large4', img_zoom: 'image_zoom4'},
    {img_small: 'image_small5', img_large: 'image_large5', img_zoom: 'image_zoom5'},
    {img_small: 'image_small6', img_large: 'image_large6', img_zoom: 'image_zoom6'},
    {img_small: 'image_small7', img_large: 'image_large7', img_zoom: 'image_zoom7'},
    {img_small: 'image_small8', img_large: 'image_large8', img_zoom: 'image_zoom8'},
    {img_small: 'image_small9', img_large: 'image_large9', img_zoom: 'image_zoom9'}
  ];

  var result = imageList.slice(0, imgCnt);
  for (var i = 0; i < imgCnt; i++) {
    result[i]['product_id'] = id;
  }
  console.log(result);
  return knex('images').insert(result);
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return knex.raw('ALTER TABLE ' + 'images' + ' AUTO_INCREMENT = 1');
    })
    .then(function () {
      
      // Inserts seed entries
      var imgCnt;
      var insertArr = [];
      for (var i = 1; i <101; i++) {
        //Select random amount of images for product
        imgCnt = Math.floor(Math.random() * 8) + 1;

        insertArr.push(productImages(knex, imgCnt, i));
      }

      return Promise.all(insertArr);
    });
};
