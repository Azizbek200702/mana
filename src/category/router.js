const router = require("express").Router();
const Controller = require("./controller");

router.route('/').get(Controller.findAll);
router.route('/').post(Controller.addNew);
router.route('/:id').put(Controller.updateOne);
router.route('/:id').delete(Controller.deleteOne);

module.exports = router;