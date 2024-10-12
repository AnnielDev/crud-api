import { Request, Response } from "express";
import User, { user } from "../model/user";

const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    let create = new User();

    const user = await User.findOne({ email: data.email });

    if (user) {
      res.status(401).send({
        ok: false,
        message: "This user already exists",
      });
    }
    create = new User(data);
    await create.save();

    res.status(200).send({
      ok: true,
      create,
      message: "user created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateUser = (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
};

const deleteUser = (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
};

export { getUsers, createUser, updateUser, deleteUser };
