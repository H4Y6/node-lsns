const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { Book } = require(`${basedir}/models/books`);

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndRemove(id);
    if (!result) {
      throw createError(404);
    }
    res.json({
      message: "Book deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteById;
