import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { DraggableWidget } from './DraggableWidget';
import { StatsWidget } from '../widgets/StatsWidget';
import { ChartWidget } from '../widgets/ChartWidget';
import { TableWidget } from '../widgets/TableWidget';
import { StorageWidget } from '../widgets/StorageWidget';
import { ActiveUsersMapWidget } from '../widgets/ActiveUsersMapWidget';
import { FileSharingWidget } from '../widgets/FileSharingWidget';
import { EmailChartWidget } from '../widgets/EmailChartWidget';
import { TotalEmailLineChartWidget } from '../widgets/TotalEmailLineChartWidget';
import { WebActivityBarsWidget } from '../widgets/WebActivityBarsWidget';
import { SectionHeading } from '../widgets/SectionHeading';
import type { Widget } from '../../types/dashboard';
import { useDashboardState } from '../../hooks/useDashboardState';

export const DashboardGrid: React.FC = () => {
  const { widgets, moveWidget, updateWidget } = useDashboardState();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 300,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      moveWidget(active.id as string, over.id as string);
    }
  };

  const renderWidgetContent = (widget: Widget) => {
    const { type, title, data } = widget.content;
    switch (type) {
      case 'stats':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <StatsWidget title={title} data={data as any} />;
      case 'chart':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <ChartWidget title={title} data={data as any} />;
      case 'table':
        return <TableWidget title={title} />;
      case 'storage':
        return <StorageWidget />;
      case 'map':
        return <ActiveUsersMapWidget />;
      case 'filesharing':
        return <FileSharingWidget />;
      case 'emailchart':
        return <EmailChartWidget />;
      case 'emailline':
        return <TotalEmailLineChartWidget />;
      case 'webbars':
        return <WebActivityBarsWidget />;
      case 'heading':
        return <SectionHeading title={title} />;
      default:
        return null;
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        <SortableContext
          items={widgets.map((w) => w.id)}
          strategy={rectSortingStrategy}
        >
          {widgets.map((widget) => (
            <DraggableWidget 
              key={widget.id} 
              widget={widget}
              onUpdateSpan={(span) => updateWidget(widget.id, { span })}
            >
              {renderWidgetContent(widget)}
            </DraggableWidget>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};
