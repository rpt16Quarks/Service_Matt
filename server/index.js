const express = require('express');
const app = express();
const PORT = 3003;

const db = require('../db/index.js');

app.use(express.static(__dirname + '/../public'));

app.get('/images', (req, res) => {
  var id = req.query.id;

  //Get data from database
  db.getProductImages(id, (err, results) => {
    if (err) {
      console.log('Query error: ', err);
    }
    // console.log('Query results: ', results);
    // console.log(results[0][0].name);
    var data = { name: results[0][0].name};
    var imgArray = results[1].map(x => {
      return { 
        small: x.img_small,
        large: x.img_large,
        zoom: x.img_zoom 
      };
    });
    data.images = imgArray;
    console.log(data);
    res.status(200).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});