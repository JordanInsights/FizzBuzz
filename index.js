const express = require('express');
const app = express();
const port = 3030;

app.get('/', (request, response) => {
  response.send('Hello world');
});

app.listen(port, () => {
  console.log('FizzBuzz App listening on port 3030');
})