// Go to 'package.json' and add
// "type": "module"
// under "main": "index.js"
// to use import feature instead of
// require feature
// Also, instead of "test": "echo \"Error: no test specified\" && exit 1"
// add "start": "nodemon index.js"
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// CORS is a Cross-Origin Resource
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'})) // To parse the incoming requests with JSON payloads

// Since Express 4.16+ the body parsing functionality has become builtin with express
// So, you can simply do
// app.use(express.urlencoded({extended: true}));
// app.use(express.json()) // To parse the incoming requests with JSON payloads
// from directly express, without having to install body-parser.
// you can now uninstall body-parser using npm uninstall body-parser
// And to get the POST data content, you can use req.body
// app.post("/yourpath", (req, res)=>{
//     var postData = req.body;
//     //Or if body comes as string,
//     var postData = JSON.parse(req.body);
// });

app.use(cors());
app.use('/posts', postRoutes);
dotenv.config();
// process.env.CONNECTION_URL
// process.env.PORT

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(process.env.PORT, () => {console.log(`Server is runing on port ${process.env.PORT}.`)}))
    .catch((error) => console.error(error))
;

