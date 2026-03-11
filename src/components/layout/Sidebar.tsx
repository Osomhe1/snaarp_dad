import React from 'react';
import { 
  LayoutDashboard, 
  Settings2, 
  BarChart3, 
  Wallet, 
  Link2, 
  UserSquare2, 
  Settings, 
  Monitor, 
  FileOutput,
  HelpCircle,
  MessageSquare,
  Shield,
  X
} from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Settings2, label: 'Organization Setup', active: false },
  { icon: BarChart3, label: 'Reporting', active: false },
  { icon: Wallet, label: 'Billing', active: false },
  { icon: Link2, label: 'Connect', active: false },
  { icon: UserSquare2, label: 'Groups', active: false },
  { icon: Settings, label: 'Settings', active: false },
  { icon: Monitor, label: 'Device Management', active: false },
  { icon: FileOutput, label: 'Personal My Export', active: false },
];

const bottomItems = [
  { icon: HelpCircle, label: 'Help desk' },
  { icon: MessageSquare, label: 'Support' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <aside className={clsx(
      "fixed inset-y-0 left-0 lg:sticky top-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col h-screen transition-transform duration-300 transform",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="p-6 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Shield className="text-white w-5 h-5" />
          </div>
          <span className="text-slate-900 font-bold text-xl tracking-tight">Snaarp</span>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              if (window.innerWidth < 1024) onClose();
            }}
            className={clsx(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 w-full group",
              item.active 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <item.icon className={clsx("w-4.5 h-4.5", item.active ? "text-white" : "text-slate-400 group-hover:text-slate-900")} />
            <span className="font-medium text-[13px] whitespace-nowrap">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-3 py-6 border-t border-slate-100 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 w-full transition-all duration-200"
          >
            <item.icon className="w-4.5 h-4.5 text-slate-400" />
            <span className="font-medium text-[13px] whitespace-nowrap">{item.label}</span>
          </button>
        ))}
        
        <div className="mt-4 p-3 bg-slate-50 rounded-xl flex items-center gap-3 border border-slate-100">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-white shrink-0">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chidinma" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-bold text-slate-900 truncate">Chidinma Snaarp</p>
            <p className="text-[11px] text-slate-500 truncate">chidinma@snaarp.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
