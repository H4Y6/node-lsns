const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { auth } = require("../../middlewares");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.put("/:contactId", auth, ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", auth, ctrlWrapper(ctrl.updateStatus));

router.delete("/:contactId", auth, ctrlWrapper(ctrl.deleteById));

module.exports = router;
