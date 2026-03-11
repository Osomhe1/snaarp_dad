import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoreHorizontal, BarChart2 } from 'lucide-react';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 700 },
  { name: 'Aug', value: 1000 },
  { name: 'Sep', value: 1200 },
  { name: 'Oct', value: 1100 },
  { name: 'Nov', value: 1300 },
  { name: 'Dec', value: 1400 },
];

export const TotalEmailLineChartWidget: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-blue-500" />
          <h3 className="text-slate-900 font-bold text-sm">Total Email</h3>
        </div>
        <div className="flex items-center gap-2">
           <div className="flex items-center bg-slate-50 border border-slate-100 rounded-lg p-0.5">
             <button className="p-1 px-2 text-[10px] font-bold text-slate-400">Monthly</button>
             <button className="p-1 px-2 text-[10px] font-bold bg-white text-blue-600 rounded shadow-sm border border-slate-100">Weekly</button>
           </div>
           <button className="p-1.5 border border-slate-100 bg-slate-50 rounded text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 500 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 500 }}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                fontSize: '12px'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
