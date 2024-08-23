import { model, Schema } from "mongoose";

const listSchema = new Schema({
  creator: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const todosList = model("todosList", listSchema);
export default todosList;
