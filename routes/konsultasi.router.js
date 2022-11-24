const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  getAllKonsultasi,
  getKonsultasiById,
  addKonsultasi,
  updateKonsultasi,
  deleteKonsultasi,
} = require("../controllers/konsultasi.controller");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

router.get("/", [auth.verifyToken, auth.isNakes], getAllKonsultasi);
router.get(
  "/:konsultasiId",
  [auth.verifyToken, auth.isNakes],
  getKonsultasiById
);
router.post("/", [auth.verifyToken, auth.isNakes], addKonsultasi);
router.patch(
  "/:konsultasiId",
  [auth.verifyToken, auth.isNakes],
  updateKonsultasi
);
router.delete(
  "/:konsultasiId",
  [auth.verifyToken, auth.isNakes],
  deleteKonsultasi
);

module.exports = router;