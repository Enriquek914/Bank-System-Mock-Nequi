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
app.use('/api/cities', require('./routes/cities-routes'));
app.use('/api/accounts', require('./routes/accounts-routes'));
app.use('/api/goals', require('./routes/goals-routes'));
app.use('/api/savings', require('./routes/savings-routes'));
app.use('/api/pockets', require('./routes/pockets-routes'));

// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});