const mongoose = require('mongoose');
const { Schema } = mongoose

const pasienSchema = new Schema({
  Nik: {
    type: Number,
    required: [true, "Nik tidak boleh kosong"],
    validate: {
      validator(Nik) {
        return this.model("Pasien")
          .findOne({ Nik })
          .then((result) => !result)
      },
      message: (props) => "Data already taken",
    }
  },
  Nama: {
    type: String,
    required: [true, "Nama tidak boleh kosong"],
  },
  Jenis_kelamin: {
    type: String,
    required: [true, "Jenis kelamin tidak boleh kosong"],
  },
  Tanggal_lahir: {
    type: Date,
    required: [true, "Tanggal lahir tidak boleh kosong"],
  },
  Alamat: {
    type: String,
    required: [true, "Alamat tidak boleh kosong"],
  },
  No_Telp: {
    type: Number,
    required: [true, "No telepon tidak boleh kosong"],
  },
  Alergi_obat: {
    type: Boolean,
    required: [true, "No telepon tidak boleh kosong"],
  },
  Pekerjaan: {
    type: String,
    required: [true, "No telepon tidak boleh kosong"],
  },
  user: {
    type: mongoose.ObjectId,
    ref: "User"
  }
})

const Pasien = mongoose.model("Pasien", pasienSchema)

module.exports = Pasien