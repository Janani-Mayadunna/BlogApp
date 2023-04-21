import { Request, Response } from 'express';
import Blog from '../models/Blog';
import { createBlog } from './blogController';

jest.mock('../models/Blog'); // mock the Blog model to avoid using database calls

// describe  sets the scope for the tests,
describe('blogController', () => {
  describe('createBlog', () => {
    beforeEach(() => {
      jest.clearAllMocks(); // clear the mock before each test  to ensure that the tests run independently of each other.
    });

    //it tests the scenario where the blog is created successfully
    it('should create a new blog', async () => {
      const req = {
        body: {
          title: 'Test Blog',
          content: 'Lorem ipsum dolor sit amet',
        },
      } as Request;
      const res = {
        //jets.fn() create a new mock function that replaces the actual create method of the Blog model.
        status: jest.fn(() => ({ json: jest.fn() })),
      } as unknown as Response;

      const mockBlog = {
        title: 'Test Blog',
        content: 'Lorem ipsum dolor sit amet',
      };

      //set the return value of mock function using mockResolvedValueOnce, which will return the mockBlog object when the mock create function is called.
      Blog.create = jest.fn().mockResolvedValueOnce(mockBlog);

      await createBlog(req, res);

      expect(Blog.create).toHaveBeenCalledWith({
        title: 'Test Blog',
        content: 'Lorem ipsum dolor sit amet',
      });
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
});
