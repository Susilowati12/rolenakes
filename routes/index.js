const express = require("express");
const router = express.Router();

const pasienRouter = require("./pasien.router");
const authRouter = require("./auth.router");
const konsultasiRouter = require("./konsultasi.router");
const rekamRouter = require("./rekam.router");

router.use("/pasien", pasienRouter);
router.use("/auth", authRouter);
router.use("/konsultasi", konsultasiRouter);
router.use("/rekam", rekamRouter);

module.exports = router;
