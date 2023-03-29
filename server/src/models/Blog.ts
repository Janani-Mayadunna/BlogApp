import { Schema, model } from "mongoose";

export interface Blog {
  title: string;
  content: string;
  image: string;
}

const BlogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export default model<Blog>("Blog", BlogSchema);
