import mongoose, { Schema, model } from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  username: string;
  lastname: string;
  email: string;
  gender: "MALE" | "FEMALE";
  password: string;
  age: number;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  password: {type: String, required: true},
  age: { type: Number, required: true },
});

export default model<IUser>("User", userSchema);
