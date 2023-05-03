const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const homeRoutes = require('./routes/HomeRoute');
const signupRoutes = require('./routes/SingupRoute');
const loginRoutes = require('./routes/LoginRoute');

const app = express();
app.use(bodyParser.json());

app.use(cors({ origin: true }));

app.use(signupRoutes);
app.use(homeRoutes);
app.use(loginRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});