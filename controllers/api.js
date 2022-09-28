const { hashSync, compareSync } = require("bcrypt")
const jwt = require('jsonwebtoken')
const { User, Room } = require("../models")

exports.protected = (req, res) => {
  console.log(req.user)

  res.send({
    message: 'ok'
  })
}

//REGISTER//
exports.register = async (req, res) => {
  try {
    console.log(req.body.role)
    if (req.body.role == "admin" || req.body.role == "player") {
      const data = await User.create({
        username: req.body.username,
        password: hashSync(req.body.password, 10),
        role: req.body.role
      })

      res.status(201).send({
        message: 'Register berhasil, silahkan login',
        user: {
          username: data.username,
          role: data.role
        }
      })
    } else {
      res.status(406).send({
        message: 'Choose the role'
      })
    }
  } catch (error) {
    res.status(422).send({
      message: 'Check again the data'
    })
  }

}

//LOGIN//
exports.login = async (req, res) => {
  // query user ke db
  const userData = await User.findOne({
    where: {
      username: req.body.username
    },
    include: Room
  })

  // kalau usernya ga exist, kasih response user not found
  if (!userData) {
    return res.status(404).send({
      message: 'User not found'
    })
  }

  // kalau passwordnya salah
  if (!compareSync(req.body.password, userData.password)) {
    return res.status(401).send({
      message: 'Incorrect password'
    })
  }

  const payload = {
    id: userData.id,
    username: userData.username,
    role: userData.role
  }

  const token = jwt.sign(payload, "supersecretkey", { expiresIn: '1d' });

  res.send({
    message: 'Login Success',
    token: `Bearer ${token}`,
    user: payload
  })
}


//ROOM//
exports.roomList = async (req, res) => {
  const data = await Room.findAll()
  res.send(data)
}

exports.createRoom = async (req, res) => {
  try {
    const data = await Room.create({
      nameRoom: req.body.nameRoom
    })

    res.status(201).send({
      message: 'Add room success',
      room: data
    })
  } catch (error) {
    res.status(422).send({
      message: 'Check the name room'
    })
  }
}

exports.deleteRoom = async (req, res) => {
  try {
    const dataRoom = await Room.findByPk(req.params.id)
    dataRoom.destroy()

    res.status(202).send({ message: 'Room deleted' })
  } catch (error) {
    res.status(422).send({ message: 'Room deleted' })
  }
}


//PLAYER//
exports.playerList = async (req, res) => {
  const player = await User.findAll()
  res.send(player)
}

exports.deletePlayer = async (req, res) => {
  try {
    const dataRoom = await User.findByPk(req.params.id)
    dataRoom.destroy()

    res.status(202).send({ message: 'User deleted' })
  } catch (error) {
    res.status(422).send({ message: 'Cannot deleted user' })
  }
}