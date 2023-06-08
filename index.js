import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes/route.js';
import path from 'path';

const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/', Router);



    app.use(express.static(path.join(__dirname, "./client/build")));
    app.get('*', function(_, res){
        res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err){
            res.status(500).send(err);
        })
    })


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running succesfully on PORT ${PORT}`));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-4ivsexm-shard-00-00.0dyvatc.mongodb.net:27017,ac-4ivsexm-shard-00-01.0dyvatc.mongodb.net:27017,ac-4ivsexm-shard-00-02.0dyvatc.mongodb.net:27017/?ssl=true&replicaSet=atlas-o9pqyh-shard-0&authSource=admin&retryWrites=true&w=majority`;
connection(URL);