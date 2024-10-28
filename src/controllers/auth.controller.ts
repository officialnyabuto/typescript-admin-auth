import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Role } from "../types/Role";

export class AuthController {
  static async register(req: Request, res: Response) {
    const { email, password, firstName, lastName, role } = req.body;

    try {
      const userRepository = AppDataSource.getRepository(User);
      
      const existingUser = await userRepository.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = userRepository.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: role || Role.USER
      });

      await userRepository.save(user);
      
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: "1d" }
      );

      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: "Error during login" });
    }
  }
}