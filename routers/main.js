const express = require("express"); /*requerir express*/
const router = express.Router(); /*instanciar router*/

const mainController = require("../controllers/mainController.js"); /*requerir controller*/

router.get("/", mainController.getHome); /*rutear páginas*/
router.get("/about", mainController.getAbout); /*rutear páginas*/

module.exports = router; /*exportar objetos*/
