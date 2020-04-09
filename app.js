const express = require('express');
const app = express();

//Importing routes

//Calling database

//Setting
app.set('port', process.env.PORT || 3001);

//Middleware

//Routes

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
