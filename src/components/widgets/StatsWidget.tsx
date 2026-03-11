import React from 'react';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';
import { clsx } from 'clsx';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

interface Props {
  title: string;
  data: {
    value: string;
    change: string;
    trend: 'up' | 'down';
    sparkline: { value: number }[];
  };
}

export const StatsWidget: React.FC<Props> = ({ title, data }) => {
  const isUp = data.trend === 'up';
  
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-slate-500 text-[13px] font-medium flex items-center gap-1.5">
          {title}
          <Info className="w-3.5 h-3.5 text-slate-300" />
        </h3>
      </div>
      
      <div className="flex items-end justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">{data.value}</span>
            <div className={clsx(
              "flex items-center text-[11px] font-bold",
              isUp ? "text-emerald-500" : "text-rose-500"
            )}>
              {isUp ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
              {data.change}
            </div>
          </div>
          <p className="text-[11px] text-slate-400">Compared to last week</p>
        </div>
        
        <div className="w-24 h-12 mb-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.sparkline}>
              <defs>
                <linearGradient id={title.replace(/\s/g, '')} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isUp ? "#10B981" : "#F43F5E"} stopOpacity={0.1}/>
                  <stop offset="95%" stopColor={isUp ? "#10B981" : "#F43F5E"} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={isUp ? "#10B981" : "#F43F5E"} 
                strokeWidth={2}
                fillOpacity={1} 
                fill={`url(#${title.replace(/\s/g, '')})`} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
