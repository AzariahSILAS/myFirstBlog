import express from 'express';
const router = express.Router();
import Post from '../Database/models/post.js' 


// Home
router.get('/', async (req, res) => {
    try {
        const data = await Post.find()
       res.render('home', {title: '100 Concepts', message: 'Home Page', data }); 
    } catch (error) { 
          
    }  
     
});
// router.get('/', async (req, res) => {
//     try {
//         const data = await Post.find()
//        res.render('home', {title: '100 Concepts', message: 'Home Page', data }); 
//     } catch (error) { 
          
//     }  
     
// });


// // Contact
// router.get('/contact', (req, res) => {
//     res.render('contact', {title: 'Contact', message: 'Contact'});
// });



// PostsPage
router.get('/posts', async (req, res) => {
    try {
        const data = await Post.find()
       res.render('posts', {title: 'post', message: 'post', data }); 
    } catch (error) { 
          
    }   
});


// Post
router.get('/post/:id', async (req, res) => {

    try {

        let slug = req.params.id;
        const data = await Post.findById(slug);
        const locals = {title: `Blog ${slug}`, message: 'Blog Post', post: data }
        console.log(data.mainContent)

        res.render('post', locals);  
    } catch (error) {  
        console.error(error) 
    }
});


 





// -------------------- admin routers ----------------------------


 
router.get('/admin', (req, res) => {
    res.render('admin', {title: 'Blog', message: 'Blog Post'});
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'login'});
});  
// ---------------------------








export default router; 



 


// function insertPostData() {
//     Post.insertMany([ 
//         {
//             title: "My second blog!",
//             mainContent: "in this post i am going to talk about the importence of Using NodeJs when programing a web App!!"
//         }
//     ]) 
// }
// // insertPostData()