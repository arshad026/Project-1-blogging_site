const blogModel = require('../models/blogModel')


const createBlog = async function(req, res){
    let data = req.body
    let savedData = await blogModel.create(data)
}