import express = require("express");
import * as user from "../controllers/user.controller";

const router: express.Router = express.Router();

//GET
router.get("/getUsers", user.getUsers);

//POST
router.post("/createUser", user.createUser);

//PUT
router.put("/updateUser/:id", user.updateUser);

//DELETE
router.delete("/deleteUser/:id", user.deleteUser);

export default router;
