const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const KEY = "asdfjsdaklf234234";
module.exports = {


  login: (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
      .then((data) => {
        bcrypt.compare(password, data.password, (err, result) => {
          if (err) {
            res.status(500).json({ message: err });
          } else {
            if (result) {
              
              const token = jwt.sign({ id: data._id, role: data.roles }, KEY);
              res
                .status(201)
                .json({ message: "Login is successfull", token: token, id: data._id,username:data.username,email:data.email, role:data.roles});
            } else {
              res.status(403).json({ message: "Login is failed" });
            }
          }
        });
      })
      .catch((err) => {
        res.status(403).json({ message: "Login is failed"  });
      });
  },

  register: (req, res) => {
    try {
      const data = req.body
      const saltRounds = 10
      const hash = bcrypt.hashSync(data.password, saltRounds)
      data.password = hash
      const user = new User(data)

      // console.log(user)
      user.save()

      res.status(201).json({
        message: "register berhasil",
      })
    } catch (error) {
      res.json({
        message: "failed regis",
      });
    }
  },
  logout: async (req, res) => {
    try {
      
      return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
      this.next(err);
    }
  },
  getAllUser: async (req, res) => {
   
      if (req.query.nik) {
        try {
          const pasien = await Pasien.find({ nik: req.query.nik });
          res.status(200).json({
            message: "Successfully get patient data",
            data: pasien,
          });
        } catch (err) {
          res.status(400).json({
            message: "Failed to get patient data",
            data: err,
          });
        }
      } else {
        try {
          const pasien = await Pasien.find({}, "-__v");
          res.status(200).json({
            message: "Success get data pasien",
            data: pasien,
          });
        } catch (err) {
          res.status(500).json({
            message: "Internal server error",
            data: err,
          });
        }
      }
    },

  getUserByID: async (req, res) => {
    try {
      const users = await User.find({}, "-__v -password")
      res.status(201).json({
        message: "Getting Data",
        data: users
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  deleteUserByID: async (req, res) => {
    try {
      const users = await User.findById(req.params.id, "-__v -password")
      if (!users) {
        res.status(404).json({
          message: "Could not Found"
        });
      } else {
        users.deleteOne()
        res.status(201).json(
          {
            message: "Data Deleted"
          })
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  updateUserByID: async (req, res) => {
    try {
      const users = await User.findById(req.params.id, "-__v -password")
      Object.assign(users, req.body)
      users.save();
      res.status(201).send({
        message: "User updated!",
        data: users
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  }
}

