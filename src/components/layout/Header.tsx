import React from 'react';
import { Search, Bell, Settings, Menu } from 'lucide-react';

interface Props {
  onMenuClick: () => void;
}

export const Header: React.FC<Props> = ({ onMenuClick }) => {
  return (
    <header className="h-16 md:h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-[180px] sm:max-w-[300px] md:max-w-[450px]">
          <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
            <Search className="h-3.5 w-3.5 md:h-4 md:w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-9 md:pl-11 pr-4 py-2 md:py-2.5 bg-slate-50/50 border border-slate-200/50 rounded-xl text-slate-900 text-[12px] md:text-[13px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all duration-300 shadow-sm"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 pr-4 hidden lg:flex items-center pointer-events-none">
            <kbd className="inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-white px-1.5 font-sans text-[10px] font-medium text-slate-400 opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        <button className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white ring-2 ring-rose-100"></span>
        </button>
        
        <button className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all duration-300">
          <Settings className="w-5 h-5" />
        </button>
        
        <div className="hidden sm:block w-[1px] h-6 bg-slate-100 mx-1 md:mx-2"></div>
        
        <button className="flex items-center gap-2 pl-1 pr-1 sm:pr-3 py-1 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-100 flex items-center justify-center overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full object-cover" />
          </div>
          <span className="hidden sm:inline text-[12px] md:text-[13px] font-semibold text-slate-700 group-hover:text-blue-600">Admin</span>
        </button>
      </div>
    </header>
  );
};
