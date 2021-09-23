var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills')



/* GET users listing. */
router.get('/', skillsController.index);
router.get('/new', skillsController.new); // <--- define /new before the /:id so the new doesn't
// get captured by the params
router.get('/:id', skillsController.show);
router.post('/', skillsController.create);
router.delete('/:id', skillsController.delete);
// :id <- param, we can access that variable in the controller by using the req object


// in the server we have app.use('/users', userRouter) so every route is prepended with /users in this 
// module

module.exports = router;