const Pasien = require("../models/pasien")


module.exports = {
  getAllPasien: async (req, res) => {
    try {
      const pasien = await Pasien.find({}, "-__v").populate("user", "name")
      res.status(200).json({
        message: "success get data pasien",
        data: pasien
      })
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      })
    }

  },

  getPasienByID: async (req, res) => {
    try {
      const { id } = req.params
      const pasien = await Pasien.findById(id)
      if (pasien === null) {
        res.status(404).json({
          message: "Pasien not found",
        })
      } else {
        res.status(200).json(pasien);
      }
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      })
    }

  },

  addPasien: async (req, res) => {
    try {
      const data = req.body
      const user = new Pasien(data)
      await user.save()
      res.status(200).json({
        message: "data has been created!!",
      })
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      })
    }
  },

  deletePasienByID: async (req, res) => {
    try {
      const data = req.body
      await Pasien.deleteOne({ id: data._id })
      res.status(200).json({
        message: "delete pasien succsess",
      });
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      })
    }

  },
  deletePasien: async (req, res) => {
    try {
      await Pasien.deleteMany();
      res.status(200).json({
        message: "delete pasien succsess",
      });
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      })
    }
  },

  updatePasienByID: async (req, res) => {
    try {
      const updatedPasien = await Pasien.updateOne({ _id: req.params.id }, { $set: req.body });
      res.status(200).json({ message: "berhasil update data", data: updatedPasien });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}