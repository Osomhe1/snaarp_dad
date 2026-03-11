import React from 'react';
import { MoreHorizontal, Apple, Laptop as Linux, Monitor, Search } from 'lucide-react';
import { clsx } from 'clsx';

interface Props {
  title: string;
}

const users = [
  { name: 'Amaka Chidi', location: 'Enugu, Nigeria', org: 'SNAARP Enugu', device: 'Windows', activity: 'Google Chrome', usage: '20 hrs 30 mins', status: 'online' },
  { name: 'Peter Mike', location: 'Lagos, Nigeria', org: 'SNAARP Lagos', device: 'Windows', activity: 'Instagram', usage: '2 hours 10 mins', status: 'online' },
  { name: 'Pamela Richard', location: 'Dubai, UAE', org: 'SNAARP Dubia', device: 'Mac', activity: 'Microsoft Teams', usage: '5 hours 45 mins', status: 'away' },
  { name: 'Sky Markers', location: 'London, UK', org: 'SNAARP London', device: 'Windows', activity: 'Instagram', usage: '1 hour 30 mins', status: 'online' },
  { name: 'Lord Bryan', location: 'Berlin, Germany', org: 'SNAARP Berlin', device: 'Mac', activity: 'Google Chrome', usage: '10 hrs 15 mins', status: 'online' },
  { name: 'Lewis Alexander', location: 'Rome, Italy', org: 'SNAARP Rome', device: 'Windows', activity: 'YouTube', usage: '45 mins', status: 'online' },
];

const DeviceIcon = ({ device }: { device: string }) => {
  switch (device) {
    case 'Windows': return <Monitor className="w-3.5 h-3.5 text-blue-500" />;
    case 'Mac': return <Apple className="w-3.5 h-3.5 text-slate-900" />;
    case 'Linux': return <Linux className="w-3.5 h-3.5 text-orange-500" />;
    default: return <Monitor className="w-3.5 h-3.5 text-slate-400" />;
  }
};

export const TableWidget: React.FC<Props> = ({ title }) => {
  return (
    <div className="p-4 h-full flex flex-col min-w-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
           <h3 className="text-slate-900 font-bold text-sm mb-1">{title}</h3>
           <p className="text-[11px] text-slate-400 font-medium font-sans">View your comprehensive online users</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
           <div className="relative flex-1 sm:flex-none">
             <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
             <input type="text" placeholder="Search users" className="w-full sm:w-auto bg-slate-50 border border-slate-100 rounded-lg py-1.5 pl-8 pr-3 text-[11px] focus:outline-none focus:ring-1 focus:ring-blue-500/20" />
           </div>
           <button className="text-[11px] font-bold text-slate-500 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2">
             All Organization <MoreHorizontal className="w-3 h-3" />
           </button>
        </div>
      </div>
      
      <div className="overflow-x-auto -mx-4 scrollbar-hide">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider border-y border-slate-100">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Organization</th>
                <th className="py-3 px-4">Device</th>
                <th className="py-3 px-4">Activity</th>
                <th className="py-3 px-4 text-right">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user, i) => (
                <tr key={i} className="group hover:bg-slate-50/50 transition-all duration-200">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className={clsx(
                          "absolute -right-0.5 -bottom-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ring-1 ring-slate-100",
                          user.status === 'online' ? 'bg-emerald-500' : 'bg-amber-500'
                        )} />
                      </div>
                      <span className="text-[12px] font-bold text-slate-700 whitespace-nowrap">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[11px] text-slate-500 font-medium whitespace-nowrap">{user.location}</td>
                  <td className="py-3 px-4 text-[11px] text-slate-400 font-medium whitespace-nowrap">{user.org}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-50 rounded-lg w-fit border border-slate-100/50">
                      <DeviceIcon device={user.device} />
                      <span className="text-[10px] font-bold text-slate-600">{user.device}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-600 truncate max-w-[120px]">{user.activity}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="text-[11px] font-bold text-slate-500 tabular-nums whitespace-nowrap">{user.usage}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
