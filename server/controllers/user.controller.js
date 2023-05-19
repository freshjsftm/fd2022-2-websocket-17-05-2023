const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const [user] = await User.find({ login: body.login });
    if (user) {
      return res.status(200).send({ data: user });
    }
    const newUser = await User.create(body);
    res.status(201).send({ data: newUser });
  } catch (error) {
    next(error);
  }
};
