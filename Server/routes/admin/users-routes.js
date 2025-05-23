const express = require("express");
const { getAllUsers, getUserById, updateUserRole } = require("../../controllers/admin/users-controller");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id/role", updateUserRole);

module.exports = router;