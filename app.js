import express from 'express';
import indexRoute from './routes/pages.routes.js';
import postRoutes from './routes/post.routes.js'
import dotenv from 'dotenv';
import { connectDB } from './Database/connectDb.js';
// import user from './Database/model/user.js';
dotenv.config()

const app = express() 
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

 
//---set up the view section---- 
app.set('view engine', 'ejs');
app.use(express.static('public'))  

// ---- routes--------

app.use('/', indexRoute);
app.use('/', postRoutes);

app.listen(PORT, () => {
    connectDB()
    console.log(`listening on port ${PORT}`)
})   