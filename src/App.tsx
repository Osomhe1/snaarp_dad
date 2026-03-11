import { MainLayout } from './components/layout/MainLayout';
import { DashboardGrid } from './components/dashboard/DashboardGrid';
import { ChevronDown, Cloud } from 'lucide-react';

function App() {
  return (
    <MainLayout>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
            <Cloud className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              Cloud Network
              <ChevronDown className="w-4 h-4 text-slate-400 mt-1" />
            </h1>
            <p className="text-[11px] md:text-[12px] text-slate-400 font-medium">Manage and monitor your infrastructure</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 text-[11px] md:text-[12px] font-bold hover:bg-slate-50 transition-all shadow-sm whitespace-nowrap">
            Jan 2024 - Dec 2024
          </button>
          <button className="flex-1 sm:flex-none px-4 md:px-6 py-2 bg-blue-600 text-white rounded-xl text-[11px] md:text-[12px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 whitespace-nowrap">
            Export Report
          </button>
        </div>
      </div>
      
      <DashboardGrid />
    </MainLayout>
  );
}

export default App;
