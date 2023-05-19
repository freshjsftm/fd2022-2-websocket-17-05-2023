const { Message } = require('../models');

module.exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find()
      .populate('author')
      .sort({'createdAt': -1})
      .limit(20);
    res.status(200).send({ data: messages });
  } catch (error) {
    next(error);
  }
};
