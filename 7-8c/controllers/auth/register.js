const bcrypt = require("bcryptjs");

const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { User, schemas } = require(`${basedir}/models/user`);

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email exists");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    name: result.name,
    email: result.email,
    password: result.password,
  });
};

module.exports = register;
