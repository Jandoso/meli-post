const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController");
const authMiddleware = require('../middlewares/auth');

router.get("/", controller.get)
router.use(authMiddleware); // Dessa forma, apenas a rota acima está desprotegida 
router.get("/nasceuSp", controller.getSp)
router.get("/:id", controller.getById)
router.get("/:id/books", controller.getBooks)
router.get("/:id/getAge", controller.getAge)
router.post("/", controller.post)
router.post("/:id/books", controller.postBooks)

module.exports = router
