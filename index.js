import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';


//Database connection
import './config/database';

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

//routes
app.use('api/v1', routes.analytics);

//server listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{console.log(`The server is running at PORT ${PORT}`)})