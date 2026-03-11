import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MoreHorizontal } from 'lucide-react';

const data = [
  { name: 'Paid', value: 400, color: '#3B82F6' },
  { name: 'Holiday', value: 300, color: '#F59E0B' },
  { name: 'Native', value: 300, color: '#10B981' },
  { name: 'Apps', value: 200, color: '#8B5CF6' },
  { name: 'Admin', value: 278, color: '#EC4899' },
  { name: 'Misc', value: 189, color: '#64748B' },
];



export const StorageWidget: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col items-center">
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="text-slate-900 font-bold text-sm">Storage</h3>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-1">
        <div className="relative w-1/2 min-h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold text-slate-800">88%</span>
            <span className="text-[10px] text-slate-400 font-medium">USED</span>
          </div>
        </div>

        <div className="w-1/2 pl-4 flex flex-col justify-center">
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-2.5 mb-4">
            <p className="text-[10px] text-amber-800 font-medium leading-relaxed">
              <span className="font-bold">Note:</span> You've almost reached your limit. Upgrade to a business plan for more space.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-50">
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};
