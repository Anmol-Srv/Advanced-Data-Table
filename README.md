# Advanced Data Table

An advanced data table application built with React, Material-UI, and Material React Table. This project features a data table with functionalities such as search, sort, filter, grouping, and column visibility toggling, all accessible via a dynamic side panel.

## Table of Contents

- [Project Overview](#project-overview)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Run Locally](#how-to-run-locally)
- [Components](#components)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project provides an interactive and customizable data table interface that allows users to perform various operations such as searching, sorting, filtering, grouping, and toggling column visibility. The side panel dynamically displays the appropriate controls based on the selected operation.

## File Structure

```plaintext
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── DataTable.js
│   │   ├── SidePanel.js
│   │   └── Functions
│   │       ├── SearchComponent.js
│   │       ├── SortComponent.js
│   │       ├── GroupComponent.js
│   │       ├── FilterComponent.js
│   │       └── ColumnVisibilityToggleComponent.js
│   ├── sampleData.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Dependencies

- @emotion/react
- @emotion/styled
- @mui/icons-material
- @mui/material
- material-react-table
- moment
- react
- react-dom
- react-scripts

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React components for faster and easier web development.
- **Material React Table**: A powerful data table component for React.
- **Moment.js**: Library for parsing, validating, manipulating, and formatting dates.
- **Fuse.js**: Lightweight fuzzy-search library.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installing Dependencies

Run the following command to install the required dependencies:

```bash
npm install
# or
yarn install
```

## How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/advanced-data-table.git
cd advanced-data-table
```

2. **Install the dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Components

### DataTable.js

The main component that renders the data table and the custom toolbar with icons for various operations. It also manages the state for global filtering, sorting, grouping, and column visibility.

### SidePanel.js

A dynamic side panel that displays controls based on the selected operation (search, sort, filter, group, toggle columns). The title of the side panel changes according to the active option.

### Functions

- **SearchComponent.js**: Component for global search functionality.
- **SortComponent.js**: Component for sorting functionality.
- **GroupComponent.js**: Component for grouping functionality.
- **FilterComponent.js**: Component for filtering functionality.
- **ColumnVisibilityToggleComponent.js**: Component for toggling column visibility.

## Future Enhancements

- Add more advanced filtering options.
- Implement user authentication and authorization.
- Add support for exporting data in different formats (CSV, Excel, PDF).
- Integrate with a backend API for dynamic data loading.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a new Pull Request
