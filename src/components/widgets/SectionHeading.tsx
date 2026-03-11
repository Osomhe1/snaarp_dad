import React from 'react';
import { Layout, ChevronDown } from 'lucide-react';

interface Props {
  title: string;
}

export const SectionHeading: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center justify-between col-span-full py-2 mt-6 first:mt-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
          <Layout className="w-4 h-4 text-blue-600" />
        </div>
        <h2 className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-2">
          {title}
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </h2>
      </div>
      
      <button className="px-4 py-1.5 bg-blue-600 text-white rounded-xl text-[11px] font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2">
        Upgrade Plan <ChevronDown className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
