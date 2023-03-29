import { Request, Response } from "express";
import Blog from "../models/Blog";

export const getAllBlogs = async (req: Request, res: Response) => {
  const blogs = await Blog.find();

  try {
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  const blogToCreate = await Blog.create(req.body);

  try {
    return res.status(200).json(blogToCreate);
  } catch (error) {
    return res.status(500).json({ msg: "Could not create blog" });
  }
};
