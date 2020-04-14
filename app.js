import express from 'express';
import morgan from 'morgan';
const app = express();

//Importing routes
import userRoutes from './routes/user';

//Calling database
require('./database/sequelize');

//Setting
app.set('port', process.env.PORT || 3001);

//Middleware
app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    res.header( "Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE, GET" );
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/user', userRoutes);

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

export default app;
