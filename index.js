const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const homeRoutes = require('./routes/HomeRoute');
const signupRoutes = require('./routes/SingupRoute');

const app = express();
app.use(bodyParser.json());

app.use(cors({ origin: true }));

// CORS Header => Required for cross-origin/cross-server communication
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(signupRoutes);
app.use(homeRoutes);


const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});