# Snaarp Dashboard

A modern, responsive dashboard built with React, TypeScript, and Vite. This project features a dynamic grid layout with drag-and-drop functionality, resizable widgets, and a variety of data visualization components.

## 🚀 Features

- **Dynamic Grid Layout**: Responsive grid that adapts to different screen sizes (1, 2, or 3 columns).
- **Drag-and-Drop**: Reorder widgets easily using `@dnd-kit`.
- **Resizable Widgets**: Adjust the width (span) of individual widgets (1-3 columns).
- **Rich Visualizations**: Includes charts (Recharts), maps, tables, and statistics.
- **Modern Tech Stack**: Built with React 19, Vite, Tailwind CSS 4, and Framer Motion.
- **Touch & Keyboard Support**: Full support for touch devices and keyboard navigation.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: Custom React Hooks
- **Drag & Drop**: [@dnd-kit](https://dnd-kit.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🏃 Getting Started

To get the project up and running locally, follow these steps:

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

### 2. Installation
Install the project dependencies using npm:

```bash
npm install
```

### 3. Development
Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 4. Build
To create a production-ready build:

```bash
npm run build
```

## 🧠 Challenges Faced

During the development of this project, several technical challenges were addressed:

1.  **Dynamic Grid Management**: Implementing a layout that allows widgets to span multiple columns (1, 2, or 3) while ensuring they reflow correctly across mobile, tablet, and desktop views.
2.  **Drag-and-Drop Integration**: Integrating `@dnd-kit` within a variable-width grid was complex. Ensuring that the sorting strategy (`rectSortingStrategy`) correctly calculates positions when widgets have different widths required careful configuration.
3.  **State Persistence**: Managing the layout state (widget order and sizes) so that the user's customizations are preserved while interacting with the dashboard.
4.  **Component Modularity**: Creating a flexible `DraggableWidget` wrapper that can house diverse content types (Charts, Maps, Tables) without leaking styles or breaking the drag-and-drop context.

