import React from 'react';
import { Chrome, Mail, Globe, Instagram, Facebook } from 'lucide-react';

const activities = [
  { name: 'Chrome', icon: Chrome, value: 90, color: '#3B82F6', text: 'Browser Productive' },
  { name: 'Email', icon: Mail, value: 75, color: '#10B981', text: 'Communication' },
  { name: 'Safari', icon: Globe, value: 45, color: '#8B5CF6', text: 'Browser' },
  { name: 'Instagram', icon: Instagram, value: 65, color: '#EC4899', text: 'Social Media' },
  { name: 'Facebook', icon: Facebook, value: 30, color: '#F43F5E', text: 'Social Media' },
];

export const WebActivityBarsWidget: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-900 font-bold text-sm">Web Activity</h3>
        <span className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-0.5 rounded">Weekly</span>
      </div>

      <div className="space-y-4 flex-1 justify-center flex flex-col">
        {activities.map((item) => (
          <div key={item.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <div className="flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-700">{item.name}</span>
              </div>
              <span className="text-slate-400">{item.text}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
               <div 
                 className="h-full rounded-full transition-all duration-1000" 
                 style={{ width: `${item.value}%`, backgroundColor: item.color }} 
               />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
