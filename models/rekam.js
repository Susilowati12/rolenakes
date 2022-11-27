const mongoose = require('mongoose');
const { Schema } = mongoose

const rekamSchema = new Schema({
    id_konsultasi:
    {
        type: Schema.Types.ObjectId,
        ref: "Konsultasi",
    },
    anamnesis: {
        type: String,
        required: true,
      },
    diagnosis: {
        type: String,
        required: true,
      },
    obat : {
        type: String,
        required: true,
      },
})

const Rekam = mongoose.model("rekam", rekamSchema)

module.exports = Rekam