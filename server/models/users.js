import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
});

const LoggedInUser = model("LoggedInUser", userSchema);
export default LoggedInUser;
