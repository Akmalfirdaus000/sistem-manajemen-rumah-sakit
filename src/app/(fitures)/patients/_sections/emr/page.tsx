// src/app/features/patients/emr/page.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface MedicalRecord {
  id: number;
  patient_id: number;
  record_date: string;
  notes: string;
}

export default function MedicalRecordsPage() {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const router = useRouter();
  const { patientId } = router.query;

  useEffect(() => {
    if (patientId) {
      async function fetchRecords() {
        const response = await fetch(`/api/patients/${patientId}/records`);
        const data = await response.json();
        setRecords(data);
      }

      fetchRecords();
    }
  }, [patientId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rekam Medis Pasien</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catatan</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {records.map((record) => (
            <tr key={record.id}>
              <td className="px-6 py-4 whitespace-nowrap">{record.record_date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{record.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
