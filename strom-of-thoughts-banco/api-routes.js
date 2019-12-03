// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contato controller
var contatoController = require('./controller/contatoController');
// contato routes
router.route('/contato')
    .get(contatoController.index)
    .post(contatoController.new);

router.route('/contato/:contato_id')
    .get(contatoController.view)
    .patch(contatoController.update)
    .put(contatoController.update)
    .delete(contatoController.delete);

router.route('/login')
    .post(contatoController.login);
// Export API routes
module.exports = router;