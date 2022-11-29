const Pasien = require("../models/pasien")


module.exports = {
  getAllPasien: async (req, res) => {
    try {
      const pasien = await Pasien.find({}, "-__v").populate("user", "name")
      res.status(201).json({
        message: "success get data pasien",
        data: pasien
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }

  },

  getPasienByID: async (req, res) => {
    try {
      const { id } = req.params
      const pasien = await Pasien.findById(id)
      if (pasien === null) {
        res.status(401).json({
          message: "Pasien not found",
        })
      } else {
        res.status(201).json(pasien);
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }

  },

  addPasien: async (req, res) => {
    try {
      const data = req.body
      const user = new Pasien(data)
      await user.save()
      res.status(201).json({
        message: "data has been created!!",
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },

  deletePasienByID: async (req, res) => {
    try {
      const data = req.body
      await Pasien.deleteOne({ id: data._id })
      res.status(201).json({
        message: "delete pasien succsess",
      });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },
  deletePasien: async (req, res) => {
    try {
      await Pasien.deleteMany();
      res.status(201).json({
        message: "delete pasien succsess",
      });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },

  updatePasienByID: async (req, res) => {
    try {
      const updatedPasien = await Pasien.updateOne({ _id: req.params.id }, { $set: req.body });
      res.status(201).json({ message: "berhasil update data", data: updatedPasien });
    } catch (err) {
      res.status(403).json({ message: err });
    }
  }
}