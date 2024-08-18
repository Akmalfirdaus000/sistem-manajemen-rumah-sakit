// src/app/features/dashboard/page.tsx
import React from 'react';
import Sidebar from '@/components/sidebar/sidebar';
import { ActionsRequired, MedicalTeamPerformance, Notifications, PerformanceChart, Statistics } from './_sections';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex-1 p-6">
        <PerformanceChart/>
        <Notifications/>
        <Statistics/>
        <ActionsRequired/>
        <MedicalTeamPerformance/>
      </main>
    </div>
  );
};

export default Dashboard;
