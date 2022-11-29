const Konsultasi = require("../models/konsultasi");

module.exports = {
  getAllKonsultasi: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.find()
        .populate("pasien", "Nama")
        .populate("dokter", "username");
      res.status(201).json(konsultasi);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },
  getKonsultasiById: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.findById(req.params.konsultasiId)
        .populate("pasien", "Nama")
        .populate("dokter", "username");
      res.status(201).json(konsultasi);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },
  addKonsultasi: async (req, res) => {
    const konsultasi = new Konsultasi({
      pasien: req.body.pasien,
      dokter: req.body.dokter,
      poli: req.body.poli,
    });
    try {
      const savedKonsultasi = await konsultasi.save();
      res.status(201).json(savedKonsultasi);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },

  updateKonsultasi: async (req, res) => {
    try {
      const updatedKonsultasi = await Konsultasi.updateOne(
        { _id: req.params.konsultasiId },
        {
          $set: {
            pasien: req.body.pasien,
            dokter: req.body.dokter,
            poli: req.body.poli,
            tanggal_konsultasi: req.body.tanggal_konsultasi,
          },
        }
      );
      res.status(201).json(updatedKonsultasi);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },
  deleteKonsultasi: async (req, res) => {
    try {
      const removedKonsultasi = await Konsultasi.remove({
        _id: req.params.konsultasiId,
      });
      res.status(201).json(removedKonsultasi);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },
};