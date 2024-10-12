import mongoose from "mongoose";

const postSchema =  new mongoose.Schema({
    title: {
        type: String,
        // required: true,
    },
    mainContent: { 
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
   
},{
    timestamps: true
});

export default mongoose.model('Post', postSchema);