const express = require('express');
const app = express();
const routes = './routes';

app.use('/', routes);

app.listen(8000, () => {
  console.log('Server is listening');
});
