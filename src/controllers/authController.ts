import { Request, Response, NextFunction } from 'express';
import { User } from '../entities/User';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { validate } from 'class-validator';
import { AppDataSource } from "../data-source";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userRepository = AppDataSource.getRepository(User)
    const user = userRepository.create({ ...req.body }) as unknown as User;

    const errors = await validate(user);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await user.hashPassword();
    await userRepository.save(user);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  // Implement login logic here
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  // Implement reset password logic here
};