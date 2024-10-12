import express from 'express';
const router = express.Router();
import Post from '../Database/models/post.js' 

router.post('/post', async (req, res) => { 
    try {
        const newPost = new Post({
            title: req.body.title,
            mainContent: req.body.mainContent
        });
        await newPost.save();
        res.redirect('/');
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
    }
})





export default router;