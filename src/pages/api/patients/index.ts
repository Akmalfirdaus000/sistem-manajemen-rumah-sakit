// src/pages/api/patients/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Patient from '../../../models/Patient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const patients = await Patient.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ error: 'Gagal memuat data pasien.' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, date_of_birth, address, phone, email } = req.body;
      const newPatient = await Patient.create({ name, date_of_birth, address, phone, email });
      res.status(201).json(newPatient);
    } catch (error) {
      res.status(500).json({ error: 'Gagal menambahkan pasien.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
