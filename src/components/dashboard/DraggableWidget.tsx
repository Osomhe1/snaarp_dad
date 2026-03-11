import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import type { Widget } from '../../types/dashboard';

interface Props {
  widget: Widget;
  children: React.ReactNode;
  onUpdateSpan: (span: 1 | 2 | 3) => void;
}

export const DraggableWidget: React.FC<Props> = ({ widget, children, onUpdateSpan }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: widget.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const currentSpan = widget.content.span || 1;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        widget.content.type === 'heading' ? 'col-span-full' : 'widget-card h-full group relative flex flex-col',
        currentSpan === 3 ? 'lg:col-span-3 md:col-span-2' : currentSpan === 2 ? 'md:col-span-2' : 'col-span-1',
        isDragging && 'z-50 opacity-50 shadow-2xl scale-[1.02]'
      )}
    >
      {/* Controls - Visible on hover or always on small screens */}
      <div className="absolute top-2 right-2 flex items-center gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-200 z-10">
        <div className="flex bg-white/90 backdrop-blur-md border border-slate-200 rounded-lg shadow-sm">
          <button 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => onUpdateSpan(Math.max(1, currentSpan - 1) as any)}
            className="p-1.5 md:p-1 hover:bg-slate-100 rounded-l-lg text-slate-400 hover:text-slate-600 border-r border-slate-200"
            title="Narrower"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => onUpdateSpan(Math.min(3, currentSpan + 1) as any)}
            className="p-1.5 md:p-1 hover:bg-slate-100 rounded-r-lg text-slate-400 hover:text-slate-600"
            title="Wider"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div
          {...attributes}
          {...listeners}
          className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-lg shadow-sm p-1.5 md:p-1 cursor-grab active:cursor-grabbing hover:bg-slate-100 text-slate-400 hover:text-slate-600 touch-none"
        >
          <GripVertical className="w-3.5 h-3.5" />
        </div>
      </div>
      
      <div className="flex-1 w-full min-w-0">
        {children}
      </div>
    </div>
  );
};
