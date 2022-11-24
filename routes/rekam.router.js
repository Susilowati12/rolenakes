const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllrekam,
  getrekamByID,
  addrekam,
  deleterekamByID,
  updaterekamByID,
} = require("../controllers/rekam.controller");
router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});
router.get("/",[auth.verifyToken, auth.isDokter], getAllrekam);
router.get("/:id",[auth.verifyToken, auth.isDokter], getrekamByID);
router.post("/",[auth.verifyToken, auth.isDokter], addrekam);
router.delete("/:id",[auth.verifyToken, auth.isDokter], deleterekamByID);
router.put("/:id",[auth.verifyToken, auth.isDokter], updaterekamByID);

module.exports = router;