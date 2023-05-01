import { Request, Response } from 'express';
import Blog from '../models/Blog';
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from './blogController';

describe('blogController', () => {
  describe('createBlog', () => {
    it('should create a new blog and return 201 status code', async () => {
      const req = {
        body: {
          title: 'Test Blog',
          content: 'This is a test blog',
          image: 'test.jpg',
        },
      } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      // Mock the Blog.create method to return a value
      const blogToCreate = { ...req.body, _id: '1' };
      jest.spyOn(Blog, 'create').mockResolvedValueOnce(blogToCreate);

      // Call the createBlog function with the mocked request and response objects
      await createBlog(req, res);

      // Expect the Blog.create method to have been called with the request body
      expect(Blog.create).toHaveBeenCalledWith(req.body);

      // Expect the response status code to be 201
      expect(res.status).toHaveBeenCalledWith(201);

      // Expect the response JSON method to have been called with the created blog object
      expect(res.json).toHaveBeenCalledWith(blogToCreate);
    });
  });

  describe('getAllBlogs', () => {
    it('should return all blogs and return 200 status code', async () => {
      // Arrange
      const mockBlogs = [{ title: 'Blog 1', content: 'Blog content 1' }, { title: 'Blog 2', content: 'Blog content 2' }];
      jest.spyOn(Blog, 'find').mockResolvedValue(mockBlogs);

      const req = {} as Request;
      const res = {
        status: jest.fn(() => ({ json: jest.fn() })),
      } as unknown as Response;

      // Act
      await getAllBlogs(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
    });

  });

  describe('getBlogById', () => {
    it('should return a single blog and return 200 status code', async () => {
      // Arrange
      const mockBlog = { _id: '123', title: 'Blog 1', content: 'Blog content 1' };
      jest.spyOn(Blog, 'findById').mockResolvedValue(mockBlog);
  
      const req = { params: { id: '123' } } as unknown as Request;
      const res = {
        status: jest.fn(() => ({ json: jest.fn() })),
      } as unknown as Response;
  
      // Act
      await getBlogById(req, res);
  
      // Assert
      expect(Blog.findById).toHaveBeenCalledWith({ _id: '123' });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
  
  describe('updateBlog', () => {
    it('should update a blog and return 202 status code', async () => {
      // Arrange
      const mockBlog = { title: 'Updated Blog', content: 'Updated Blog content' };
      const mockUpdateBlog = { ...mockBlog, _id: '123' };
      jest.spyOn(Blog, 'findByIdAndUpdate').mockResolvedValue(mockUpdateBlog);
  
      const req = { params: { id: '123' }, body: mockBlog } as unknown as Request;
      const res = { status: jest.fn(() => ({ json: jest.fn() })) } as unknown as Response;
  
      // Act
      await updateBlog(req, res);
  
      // Assert
      expect(Blog.findByIdAndUpdate).toHaveBeenCalledWith('123', mockBlog, { new: true });
      expect(res.status).toHaveBeenCalledWith(202);
    });
  });
  
  describe('deleteBlog', () => {
    it('should delete a blog and return 203 status code', async () => {
      // Arrange
      const id = '123';
      jest.spyOn(Blog, 'findByIdAndDelete').mockResolvedValueOnce(null);
  
      const req = {
        params: { id },
      } as unknown as Request;
      const res = {
        status: jest.fn(() => ({ json: jest.fn() })),
      } as unknown as Response;
  
      // Act
      await deleteBlog(req, res);
  
      // Assert
      expect(Blog.findByIdAndDelete).toHaveBeenCalledWith(id);
      expect(res.status).toHaveBeenCalledWith(203);
    });
  });
  

});
