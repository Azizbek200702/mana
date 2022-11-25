const Order = require("./model");

module.exports = {
    findAll: async function (req, res, next) {
        try{
            const doc = await Order.find({});
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to get Orders ' + err))
        }
    },

    addNew: async function (req, res, next) {
        try{
            console.log(req.body)
            const newProdct = await Order.create(req.body);
            return res.status(200).send(newProdct);
        } catch (err) {
            return next(res.status(400).send('Failed to addNew Orders ' + err))
        }
    },

    updateOne: async function (req, res, next) {
        try{
            const doc = await Order.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            }).exec();
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to updateOne Orders ' + err))
        }
    },

    deleteOne: async function (req, res, next) {
        try{
            let delId = req.params.id
            console.log(delId); 
            const doc = await Order.findByIdAndDelete(delId).exec();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to deleteOne Orders ' + err))
        }
    }
}