import express = require("express");
import * as User from "../controllers/user.controller";

const router: express.Router = express.Router();

//GET
router.get("/getUsers", User.getUsers);

//POST
router.post("/createUser", User.createUser);
router.post("/loginUser", User.loginUser);

//PUT
router.put("/updateUser/:id", User.updateUser);

//DELETE
router.delete("/deleteUser/:id", User.deleteUser);

export default router;
