import express from 'express';
const router = express.Router();
import Post from '../Database/models/post.js' 


// Home
router.get('/', async (req, res) => {
    try {
        // const data = await Post.find()
       res.render('home', {title: '100 Concepts', message: 'Home Page'}); 
    } catch (error) { 
      console.error(error)    
    }  
     
});
// router.get('/', async (req, res) => {
//     try {
//         const data = await Post.find()
//        res.render('home', {title: '100 Concepts', message: 'Home Page', data }); 
//     } catch (error) { 
          
<<<<<<< HEAD
//     }  
     
// });


// // Contact
// router.get('/contact', (req, res) => {
//     res.render('contact', {title: 'Contact', message: 'Contact'});
// });



// // PostsPage
// router.get('/posts', async (req, res) => {
//     try {
//         const data = await Post.find()
//        res.render('posts', {title: 'post', message: 'post', data }); 
//     } catch (error) { 
          
//     }   
// });


// // fullPost
// router.get('/post/:id', async (req, res) => {

//     try {

//         let slug = req.params.id;
//         const data = await Post.findById(slug);
//         const locals = {title: `Blog ${slug}`, message: 'Blog Post', post: data }
//         console.log(data.mainContent)

//         res.render('post', locals);  
//     } catch (error) {  
//         console.error(error) 
//     }
// });


 





// // -------------------- admin routers ----------------------------

// // Middleware to check if the user is authenticated
// function requireAuth(req, res, next) {
//     if (!req.session.userId) {
//         return res.redirect('/login'); // Redirect to login if not authenticated
//     }
//     next();
// }


// // Example of a protected admin route
// router.get('/admin', requireAuth, (req, res) => {
//     res.render('admin', { title: 'Admin Page' });
// });
 
// // router.get('/admin', (req, res) => {
// //     res.render('admin', {title: 'Blog', message: 'Blog Post'});
// // });

// router.get('/login', (req, res) => {
//     res.render('login', {title: 'login'});
// });  

// router.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             return res.redirect('/admin');
//         } 
//         res.redirect('/login'); // Redirect to login after logging out
//     });
// });
// // ---------login post req------------------
// router.post('/login', async (req, res) => {
//     const {username, password} = req.body;
//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(401).send('User not found');
//         }

//         // Check if the password is correct
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(401).send('Incorrect password');
//         }

//         // Store user session
//         req.session.userId = user._id;
//         res.redirect('/admin'); // Redirect to the admin page after successful login
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// }); 
=======
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
>>>>>>> parent of c014051 (ok now ive a boilerplate that i can user to create blog sites, it still needs a ton of cleaning up but this will do for now!)








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