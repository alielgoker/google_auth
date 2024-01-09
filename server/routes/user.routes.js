const router = require("express").Router();
import { userSave } from "../controller/user.controler";
router.route("/user")
.post(userSave)