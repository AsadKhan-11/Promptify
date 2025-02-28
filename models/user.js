import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^[A-Za-z][A-Za-z0-9]{7,19}$/,
      "Username should be alphanumeric container letters between 8 - 20",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
