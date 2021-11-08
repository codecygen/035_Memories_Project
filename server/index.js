// Go to 'package.json' and add
// "type": "module"
// under "main": "index.js"
// to use import feature instead of
// require feature
// Also, instead of "test": "echo \"Error: no test specified\" && exit 1"
// add "start": "nodemon index.js"
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// CORS is a Cross-Origin Resource
import cors from 'cors';
