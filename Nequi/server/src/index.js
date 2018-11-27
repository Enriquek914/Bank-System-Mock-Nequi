const express = require('express');
const morgan = require('morgan');
//const path = require('path');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ "exposedHeaders": "X-Total-Count" }));

// Routes
app.use('/api/users', require('./routes/users-routes'));

// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});