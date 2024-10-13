import { Request, Response } from "express";
import User, { IUser } from "../model/user";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();
    if (users) {
      res.status(200).json({
        ok: true,
        data: users,
        message: "Users successfully obtained",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Ups! Something went wrong", error });
  }
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
      return;
    }
    create = new User(data);
    await create.save();

    res.status(200).send({
      ok: true,
      create,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Ups! Something went wrong", error });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const updatedUser: IUser | null = await User.findByIdAndUpdate(id, data, { new: true });

    if (!updatedUser) {
       res.status(404).json({
        ok: false,
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      ok: true,
      data: updatedUser,
      message: "User updated successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: "Ups! Something went wrong", error });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    //const user: IUser | null = await User.findByIdAndUpdate(
     // id,
      //{ $isDeleted: true, isActive: false },
     // { new: true }
   // );

    const user: IUser | null = await User.findByIdAndDelete(id)

    res.status(200).send({
      ok: true,
      data: user,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Ups! Something went wrong", error });
  }
};

export { getUsers, createUser, updateUser, deleteUser };
