import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String },
    slug: { type: String },
    content: { type: String },
    status: { type: String, default: "draft" },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
