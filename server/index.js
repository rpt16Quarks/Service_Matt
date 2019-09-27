const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});