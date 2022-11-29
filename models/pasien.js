const mongoose = require('mongoose');
const { Schema } = mongoose

const pasienSchema = new Schema({
  nik: {
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
  nama: {
    type: String,
    required: [true, "Nama tidak boleh kosong"],
  },
  jenis_kelamin: {
    type: String,
    required: [true, "Jenis kelamin tidak boleh kosong"],
  },
  tanggal_lahir: {
    type: Date,
    required: [true, "Tanggal lahir tidak boleh kosong"],
  },
  alamat: {
    type: String,
    required: [true, "Alamat tidak boleh kosong"],
  },
  no_Telp: {
    type: Number,
    required: [true, "No telepon tidak boleh kosong"],
  },
  alergi_obat: {
    type: String,
    required: [true, "No telepon tidak boleh kosong"],
  },
  pekerjaan: {
    type: String,
    required: [true, "No telepon tidak boleh kosong"],
  },
 
})

const Pasien = mongoose.model("Pasien", pasienSchema)

module.exports = Pasien