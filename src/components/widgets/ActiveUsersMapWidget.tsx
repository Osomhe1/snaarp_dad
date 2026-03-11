import React from 'react';
import { MoreHorizontal, MapPin } from 'lucide-react';

const countries = [
  { name: 'United Kingdom', flag: '🇬🇧', value: 75, color: '#3B82F6' },
  { name: 'Nigeria', flag: '🇳🇬', value: 62, color: '#10B981' },
  { name: 'UAE', flag: '🇦🇪', value: 48, color: '#F59E0B' },
  { name: 'Canada', flag: '🇨🇦', value: 35, color: '#EC4899' },
  { name: 'USA', flag: '🇺🇸', value: 25, color: '#8B5CF6' },
];

export const ActiveUsersMapWidget: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-900 font-bold text-sm">Active Users</h3>
        <button className="text-[11px] font-bold text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-50 rounded-md border border-slate-100 flex items-center gap-1">
          Weekly <MoreHorizontal className="w-3 h-3" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row flex-1 gap-4 lg:gap-6">
        <div className="h-40 sm:h-auto sm:w-1/2 bg-slate-100 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0">
           {/* Mock Map Background */}
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
           <div className="relative">
              <div className="absolute -top-6 -left-8 animate-bounce">
                <MapPin className="w-4 h-4 text-blue-600 fill-blue-100" />
              </div>
              <div className="absolute top-2 left-10 animate-pulse delay-75">
                <MapPin className="w-4 h-4 text-emerald-600 fill-emerald-100" />
              </div>
              <div className="absolute top-10 right-4 animate-bounce delay-150">
                <MapPin className="w-4 h-4 text-amber-600 fill-amber-100" />
              </div>
           </div>
           <div className="text-[9px] font-bold text-slate-400 z-10 bottom-2 absolute">LIVE ACTIVITY</div>
        </div>

        <div className="flex-1 flex flex-col justify-between py-1 gap-2">
          {countries.map((country) => (
            <div key={country.name} className="space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-sm leading-none">{country.flag}</span>
                  <span className="font-bold text-slate-700">{country.name}</span>
                </div>
                <span className="font-bold text-slate-400">{country.value}%</span>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000" 
                  style={{ 
                    width: `${country.value}%`,
                    backgroundColor: country.color
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
