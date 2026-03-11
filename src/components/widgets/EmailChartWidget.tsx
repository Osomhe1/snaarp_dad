import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sent', value: 5000, color: '#3B82F6' },
  { name: 'Received', value: 3000, color: '#F59E0B' },
  { name: 'Drafts', value: 1000, color: '#94A3B8' },
];

export const EmailChartWidget: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col items-center justify-center relative">
      <h3 className="text-slate-900 font-bold text-sm self-start mb-2">Email Chart</h3>
      
      <div className="w-full h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={70}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-blue-50/50 flex flex-col items-center justify-center">
             <span className="text-xs font-bold text-blue-600">Emails</span>
             <span className="text-[10px] text-slate-400">Status</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4 text-[11px] font-bold text-slate-500">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-amber-500" /> Draft
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-blue-500" /> Received
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-300" /> Sent
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Emails Sent</p>
        <p className="text-xl font-bold text-slate-800 tracking-tight">5,421</p>
      </div>
    </div>
  );
};
