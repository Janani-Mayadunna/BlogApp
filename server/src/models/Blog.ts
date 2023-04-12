import { Schema, model } from "mongoose";

// specify the structure of the documents in the "Blog" collection
export interface Blog {
  title: string;
  content: string;
  image: string;
}

// A Mongoose schema is created using the "Schema" function and the "Blog" interface as the generic type parameter
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
// a default Mongoose model for the "Blog" collection is exported using the "model" function, with the "Blog" interface as the type parameter and the "BlogSchema" variable as the schema parameter.
// The "model" function returns a constructor function that can be used to create, read, update, and delete documents in the "Blog" collection in the MongoDB database.
export default model<Blog>("Blog", BlogSchema);
