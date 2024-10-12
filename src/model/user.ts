import mongoose, { Schema, model } from "mongoose";

export interface user extends mongoose.Document {
  name: string;
  username: string;
  lastname: string;
  email: string;
  gender: "MALE" | "FEMALE";
  age: number;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
});

export default model<user>("User", userSchema);
