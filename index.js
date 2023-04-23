const express = require('express');
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/HomeRoute');

const app = express();

app.use(homeRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});