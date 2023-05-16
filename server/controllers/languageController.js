const uuid = require('uuid')
const path = require('path')
const {Language} = require('../models/models')
const ApiError = require('../error/ApiError')

class LanguageController{
    async create(req, res, next){
        try {
            let {name, description, typeId, rating} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const language = await Language.create({name, description, rating, typeId, img: fileName})
            return res.json(language)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateRating(req,res, next){
        try{
            const {id} = req.params 
            const {rating} = req.body

            const language = await Language.findByPk(id)

            if(!language){
                return next(ApiError.badRequest('There is no such language.'))
            }

            language.rating = rating

            await language.save()

            res.json(language)

        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        try {
            const languages =  await Language.findAll()
            return res.json(languages)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }

    }

    async getOne(req, res, next){
        try {
            const {id} = req.params
            const language = await Language.findOne({where: {id}})

            return res.json(language)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new LanguageController()