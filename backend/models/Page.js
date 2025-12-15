import mongoose from "mongoose";

const pageSchema = new mongoose.Schema(
  {
    title: { type: String },
    slug: { type: String },
    content: { type: String },
    status: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("page", pageSchema);
