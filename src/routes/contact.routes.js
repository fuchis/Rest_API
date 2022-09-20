const router = require("express").Router();
const { ContactController } = require("../controllers")
const { getClientIP } = require("../middleware/getClientIp.middleware");
const { validateHttpMethod } = require("../middleware/validateHttpMethod.middleware");
const { validateUrlQueryPhrase } = require("../middleware/validateUrlQueryPhrase.middleware");

/**
 * Rutas de la API
 * Se uso el all para poder hacer las validaciones con un middleware personalizado del metodo http
 */
router.all("/contacts",validateHttpMethod, validateUrlQueryPhrase, ContactController.index);
router.delete("/contacts/:id", validateHttpMethod, ContactController.delete);
router.all("/contacts/:id_contact", validateHttpMethod, ContactController.findOne);
router.all("/contact", getClientIP, validateHttpMethod, ContactController.create);

module.exports = router;