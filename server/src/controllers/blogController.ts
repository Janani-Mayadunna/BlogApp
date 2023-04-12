import { Request, Response } from "express";
import Blog from "../models/Blog";

// retrieves all documents from the "Blog" collection in a MongoDB database and returns them as a JSON response.
export const getAllBlogs = async (req: Request, res: Response) => {
  const blogs = await Blog.find();

  try {
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const singleBlog = await Blog.findById({ _id: id });

  try {
    return res.status(200).json(singleBlog);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  const blogToCreate = await Blog.create(req.body);

  try {
    return res.status(201).json(blogToCreate);
  } catch (error) {
    return res.status(500).json({ msg: "Could not create blog" });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  // "id" parameter is extracted from the "req.params" object, which contains the URL parameters of the HTTP request.
  const { id } = req.params;
  // find the document with the specified "id" and update its contents with the data in the "req.body" object.
  const gameToUpdate = await Blog.findByIdAndUpdate(id, req.body, {
    //  ensure that the updated document is returned in the response.
    new: true,
  });
  try {
    return res.status(202).json(gameToUpdate);
  } catch (error) {
    return res.status(500).json({ msg: "Could not update blog" });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);

  try {
    return res.status(203).json({ msg: "Blog deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ msg: "Could not delete blog" });
  }
};
