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
router.use([auth.verifyToken, auth.isDokter]);
router.get("/", getAllrekam);
router.get("/:id", getrekamByID);
router.post("/", addrekam);
router.delete("/:id", deleterekamByID);
router.put("/:id", updaterekamByID);

module.exports = router;