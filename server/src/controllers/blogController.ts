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
  const { id } = req.params;
  const gameToUpdate = await Blog.findByIdAndUpdate(id, req.body, {
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
