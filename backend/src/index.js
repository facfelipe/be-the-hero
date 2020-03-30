const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();
const port = 3333;

app.use(cors({
  //  origin: '127.0.0.1'
}));

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
