import express from 'express';
import indexRoute from './routes/pages.routes.js';
import postRoutes from './routes/post.routes.js'
import dotenv from 'dotenv';
import { connectDB } from './Database/connectDb.js';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import MongoStore from 'connect-mongo';

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import user from './Database/model/user.js';
dotenv.config()

const app = express() 
const PORT = process.env.PORT;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Use session middleware
// app.use(session({
//     secret: process.env.SESSION_SECRET, // You should store this securely (e.g., in environment variables)
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }), // Connect to your MongoDB
//     cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1-day session expiration
// }));

 
//---set up the view section---- 
app.set('view engine', 'ejs');
app.use(express.static('public'))  
app.use(express.static('public/assets')) 

// ---- routes--------

app.use('/', indexRoute);
app.use('/', postRoutes);

app.listen(PORT, () => {
    // connectDB()
    console.log(`listening on port ${PORT}`)
})   