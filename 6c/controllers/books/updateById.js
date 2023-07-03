const { basedir } = global;
const { Book, schemas } = require(`${basedir}/models/book`);
const { createError } = require(`${basedir}/helpers`);

const updateById = async (req, res, next) => {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
