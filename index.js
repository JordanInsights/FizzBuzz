const express = require('express');
const methods = require('./FizzBuzz')
const app = express();
const port = 3030;

app.get('/', (request, response) => {
  return response.send('Hello world');
});

app.get('/fizz-buzz', (request, response) => {
  const data = methods.jsonFizzBuzz();
  return response.send(data);
})

app.listen(port, () => {
  console.log('FizzBuzz App listening on port 3030');
  console.log(methods)
})