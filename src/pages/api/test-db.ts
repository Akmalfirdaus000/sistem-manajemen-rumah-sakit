import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '@/lib/db/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sequelize.authenticate();
    res.status(200).json({ message: 'Database connection is successful' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Failed to connect to the database', error: error.message });
    } else {
      res.status(500).json({ message: 'Failed to connect to the database', error: 'An unknown error occurred' });
    }
  }
}

