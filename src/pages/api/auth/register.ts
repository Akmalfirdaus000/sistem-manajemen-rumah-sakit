import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import sequelize from '@/lib/db/db';
import User from '@/models/User';

export default async function registerHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password, role } = req.body;

  try {
    // Validasi input
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Hash password sebelum menyimpannya ke database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan pengguna baru ke database
    const newUser = await User.create({
      
      name,
      email,
      password: hashedPassword,
      role
    });

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: 'Error registering user', error: error.message });
    } else {
      return res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
}
