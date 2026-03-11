import { useState, useCallback } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import type { Widget } from '../types/dashboard';

const sparklineData = [
  { value: 30 }, { value: 40 }, { value: 35 }, { value: 50 }, { value: 49 }, { value: 60 }, { value: 70 }, { value: 91 }
];

const INITIAL_WIDGETS: Widget[] = [
  {
    id: 'stats-users',
    content: {
      title: 'Users',
      type: 'stats',
      data: { value: '3,836', change: '12%', trend: 'down', sparkline: sparklineData },
    },
  },
  {
    id: 'stats-groups',
    content: {
      title: 'Groups',
      type: 'stats',
      data: { value: '316', change: '12%', trend: 'up', sparkline: sparklineData },
    },
  },
  {
    id: 'storage-1',
    content: {
      title: 'Storage',
      type: 'storage',
      data: {},
    },
  },
  {
    id: 'stats-uptimes',
    content: {
      title: 'Uptimes',
      type: 'stats',
      data: { value: '316', change: '12%', trend: 'up', sparkline: sparklineData },
    },
  },
  {
    id: 'stats-departments',
    content: {
      title: 'Departments',
      type: 'stats',
      data: { value: '316', change: '12%', trend: 'down', sparkline: sparklineData },
    },
  },
  {
    id: 'file-sharing-1',
    content: {
      title: 'File Sharing',
      type: 'filesharing',
      span: 2,
      data: {},
    },
  },
  {
    id: 'active-users-map',
    content: {
      title: 'Active Users',
      type: 'map',
      span: 1,
      data: {},
    },
  },
  {
    id: 'heading-device',
    content: {
      title: 'Device Management Dashboard',
      type: 'heading',
      span: 3,
      data: {},
    },
  },
  {
    id: 'stats-devices',
    content: {
      title: 'Number of Devices',
      type: 'stats',
      data: { value: '3,836', change: '5%', trend: 'up', sparkline: sparklineData },
    },
  },
  {
    id: 'stats-users-2',
    content: {
      title: 'Users',
      type: 'stats',
      data: { value: '3,836', change: '12%', trend: 'down', sparkline: sparklineData },
    },
  },
  {
    id: 'stats-install',
    content: {
      title: 'Installs',
      type: 'stats',
      data: { value: '316', change: '23%', trend: 'down', sparkline: sparklineData },
    },
  },
  {
    id: 'heading-productivity',
    content: {
      title: 'Productivity Report',
      type: 'heading',
      span: 3,
      data: {},
    },
  },
  {
    id: 'email-chart-1',
    content: {
      title: 'Email Chart',
      type: 'emailchart',
      span: 1,
      data: {},
    },
  },
  {
    id: 'email-line-1',
    content: {
      title: 'Total Email',
      type: 'emailline',
      span: 2,
      data: {},
    },
  },
  {
    id: 'heading-online',
    content: {
      title: 'Online Users',
      type: 'heading',
      span: 3,
      data: {},
    },
  },
  {
    id: 'online-users-table',
    content: {
      title: 'Online Users',
      type: 'table',
      span: 3,
      data: {},
    },
  },
  {
    id: 'web-activity-1',
    content: {
      title: 'Web Activity',
      type: 'webbars',
      span: 1,
      data: {},
    },
  },
];

export const useDashboardState = () => {
  const [widgets, setWidgets] = useState<Widget[]>(INITIAL_WIDGETS);

  const moveWidget = useCallback((activeId: string, overId: string) => {
    setWidgets((items) => {
      const oldIndex = items.findIndex((i) => i.id === activeId);
      const newIndex = items.findIndex((i) => i.id === overId);
      return arrayMove(items, oldIndex, newIndex);
    });
  }, []);

  const updateWidget = useCallback((id: string, updates: Partial<Widget['content']>) => {
    setWidgets((items) => 
      items.map((widget) => 
        widget.id === id 
          ? { ...widget, content: { ...widget.content, ...updates } }
          : widget
      )
    );
  }, []);

  return {
    widgets,
    moveWidget,
    updateWidget,
  };
};
