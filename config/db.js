const mongoose = require('mongoose');

const DB_URL = 'mongodb://mongo:WPsIN5lYK9ThQdULylu2@containers-us-west-99.railway.app:7865'

const db = mongoose.connect(DB_URL)

module.exports = db