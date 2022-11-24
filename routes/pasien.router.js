const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  getAllPasien,
  getPasienByID,
  addPasien,
  deletePasienByID,
  deletePasien,
  updatePasienByID,
} = require("../controllers/pasien.controller");
router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});
router.get("/", [auth.verifyToken], getAllPasien);
router.get("/:id", [auth.verifyToken], getPasienByID);
router.post("/", [auth.verifyToken, auth.isNakes], addPasien);
router.delete("/:id", [auth.verifyToken, auth.isNakes], deletePasienByID);
router.delete("/", [auth.verifyToken, auth.isNakes], deletePasien);
router.patch("/:id", [auth.verifyToken, auth.isNakes], updatePasienByID);

module.exports = router;
