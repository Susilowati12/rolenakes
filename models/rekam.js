const mongoose = require('mongoose');
const { Schema } = mongoose

const rekamSchema = new Schema({
    id_konsultasi:
    {
        type: Schema.Types.ObjectId,
        ref: "Konsultasi",
    },
    anamnesis: String,
    diagnosis: String,
    obat: String,
})

const Rekam = mongoose.model("rekam", rekamSchema)

module.exports = Rekam