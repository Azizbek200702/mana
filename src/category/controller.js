const Category = require("./model");

module.exports = {
    findAll: async function (req, res, next) {
        try{
            const doc = await Category.find({}).exec();
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to get Categorys ' + err))
        }
    },


    addNew: async function (req, res, next) {
        try{
            const newProdct = await Category.create(req.body);
            return res.status(200).json(newProdct);
        } catch (err) {
            return next(res.status(400).send('Failed to addNew Categorys ' + err))
        }
    },

    updateOne: async function (req, res, next) {
        try{
            const doc = await Category.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            }).exec();
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to updateOne Categorys ' + err))
        }
    },

    deleteOne: async function (req, res, next) {
        try{
            const doc = await Category.findByIdAndRemove(req.params.id).exec();
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to deleteOne Categorys ' + err))
        }
    }
}