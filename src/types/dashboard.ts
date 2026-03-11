export type WidgetType = 'stats' | 'chart' | 'table' | 'storage' | 'map' | 'filesharing' | 'emailchart' | 'emailline' | 'heading' | 'webbars';

export interface WidgetContent {
  title: string;
  type: WidgetType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  span?: 1 | 2 | 3; // Grid column span
}

export interface Widget {
  id: string;
  content: WidgetContent;
}

export interface DashboardState {
  widgets: Widget[];
}
