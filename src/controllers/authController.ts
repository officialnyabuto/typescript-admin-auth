import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { validate } from 'class-validator';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userRepository = getRepository(User);
    const user = userRepository.create(req.body);

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
  try {
    const { email, password } = req.body;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  // Implement password reset logic here
  res.json({ message: 'Password reset functionality' });
};