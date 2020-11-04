const express = require('express');
const app = express();
const plantRouter = require('./plants');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');

app.use('/plants', plantRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.end('error');
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
