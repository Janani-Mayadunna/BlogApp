import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginUser } from './authController';
import User from '../models/User';

jest.mock('../models/User'); // mock the User model
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('authController', () => {
  describe('loginUser', () => {
    beforeEach(() => {
      jest.clearAllMocks(); // clear the mock before each test
    });

    it('should return 401 if user does not exist', async () => {
      // sets up the request object with the email and password of a nonexistent user
      const req = {
        body: { email: 'nouser@example.com', password: 'password' },
      } as Request;

      // sets up a mock response object with a mocked status method that returns another mocked object with a json method:
      const res = {
        status: jest.fn(() => ({ json: jest.fn() })),
      } as unknown as Response;

      // mocks the findOne method of the User model to return null since the user does not exist in the database:
      User.findOne = jest.fn().mockResolvedValueOnce(null);

      await loginUser(req, res);

      expect(User.findOne).toHaveBeenCalledWith({
        email: 'nouser@example.com',
      });
      expect(res.status).toHaveBeenCalledWith(401);
    });

    it('should return 403 if passwords do not match', async () => {
      const req = {
        body: { email: 'test@test.com', password: 'test123' },
      } as Request;
      const res = {
        status: jest.fn(() => ({ json: jest.fn() })),
      } as unknown as Response;

      User.findOne = jest.fn().mockResolvedValueOnce({
        email: 'test@test.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync()),
      });

      await loginUser(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: 'test@test.com' });
      expect(res.status).toHaveBeenCalledWith(403);
    });
  });
});
