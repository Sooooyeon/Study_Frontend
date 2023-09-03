const Post = require("../model/post");
const postCtr = {
    upload :async(req,res)=>{
        const{title,content} =req.body;
        const image = req.file.location;
        console.log(image);
    }
}

module.exports = postCtr;