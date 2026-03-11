import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MoreHorizontal, FileBarChart } from 'lucide-react';

const data = [
  { name: 'Mon', public: 400, private: 240, org: 240 },
  { name: 'Tue', public: 300, private: 139, org: 221 },
  { name: 'Wed', public: 200, private: 980, org: 229 },
  { name: 'Thu', public: 278, private: 390, org: 200 },
  { name: 'Fri', public: 189, private: 480, org: 218 },
  { name: 'Sat', public: 239, private: 380, org: 250 },
  { name: 'Sun', public: 349, private: 430, org: 210 },
];

export const FileSharingWidget: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
            <FileBarChart className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h3 className="text-slate-900 font-bold text-sm">File Sharing</h3>
            <p className="text-[10px] text-slate-400 font-medium tracking-tight">Proportion of files shared by users</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="p-1 px-2 border border-slate-100 bg-slate-50 rounded text-[10px] font-bold text-slate-500">Weekly</button>
           <button className="p-1 border border-slate-100 bg-slate-50 rounded text-slate-400"><MoreHorizontal className="w-3 h-3" /></button>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
              cursor={{ fill: '#F8FAFC' }}
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                fontSize: '12px'
              }} 
            />
            <Legend 
              verticalAlign="bottom" 
              align="center" 
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 600, color: '#64748B' }}
            />
            <Bar dataKey="public" name="Public" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={8} />
            <Bar dataKey="private" name="Private" fill="#10B981" radius={[4, 4, 0, 0]} barSize={8} />
            <Bar dataKey="org" name="Within Org" fill="#F59E0B" radius={[4, 4, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
