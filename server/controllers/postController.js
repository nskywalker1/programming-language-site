const {Post} = require('../models/models')
const ApiError = require('../error/ApiError')

class PostController{
    async create(req, res, next){
        const {title, description} = req.body
        const userId = req.user.id
        const post = await Post.create({title, description, userId})
        return res.json(post)
    }

    async getAll(req, res, next){
        const posts = await Post.findAll()
        return res.json(posts)
    }

    async getOne(req, res, next){
        const {id} = req.params
        const post = await Post.findOne({where: {id}})
        return res.json(post)
    }

    async delete(req, res, next){
        const {id} = req.params
        const deleteCount = await Post.destroy({where: {id}})

        if(deleteCount === 0){
            return next(ApiError.badRequest('there is no such post'))
        }

        return res.json({message: 'current'})
    }
}


module.exports = new PostController()