# CkDataGrid Usage Guide

This guide provides an overview of the main functions and usage of the `CkDataGrid` component, a powerful data grid built with SolidJS and TanStack Table for displaying, grouping, sorting, filtering, and exporting tabular data.

## Overview

The `CkDataGrid` component is designed to render a customizable data grid with features like grouping, sorting, pagination, filtering, and exporting to Excel and PDF formats. It leverages SolidJS for reactive state management and TanStack Table for table functionality, with a Material-UI-based interface.

## Main Functions and Usage

### 1. CkDataGrid Component

The primary component for rendering the data grid.

#### Props
- `dataSource: T[]` - Array of data objects to display.
- `columns: CkColumn<T>[]` - Array of column definitions, each with a `header` (display name) and `field` (key in data object).
- `grouping?: CkGrouping<T>` - Optional grouping configuration with `fields` (columns to group by) and `formatter` (custom display formatter).

#### Example
```tsx
import { CkDataGrid } from './CkDataGrid';

interface Data {
  id: number;
  name: string;
  age: number;
}

const data: Data[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const columns: CkColumn<Data>[] = [
  { header: "ID", field: "id" },
  { header: "Name", field: "name" },
  { header: "Age", field: "age", grouping: { index: 1 } },
];

const App = () => {
  return (
    <CkDataGrid
      dataSource={data}
      columns={columns}
      grouping={{ fields: ["age"] }}
    />
  );
};
```

This example renders a grid with three columns, grouped by the "Age" column.

### 2. Grouping Data

The grid supports hierarchical grouping based on specified columns.

#### Key Functions
- `resolvedGroupCols`: Determines the columns to group by, either from `grouping.fields` or columns with a `grouping.index`.
- `toggleGroup(groupId: string)`: Toggles the expansion state of a specific group.
- `toggleAllGroups()`: Expands or collapses all groups.
- `getGroupDisplayValue(row: Row<T>)`: Formats the display value for grouped rows using a custom formatter or default formatting.

#### Usage
- Define grouping in the `grouping` prop or set `grouping.index` in column definitions.
- Use the "Group By" dropdown to dynamically select grouping columns.
- Click the expand/collapse icons or the "Expand All"/"Collapse All" button to manage group visibility.

#### Example
```tsx
const grouping = {
  fields: ["age"],
  formatter: ({ row, column }) => `${column.header}: ${row.getValue(row.groupingColumnId) || "N/A"}`,
};
```

### 3. Sorting and Filtering

The grid supports sorting by clicking column headers and filtering via a search input.

#### Key Functions
- `setSorting`: Updates the sorting state (column and direction).
- `debouncedSetGlobalFilter`: Applies a debounced global filter to search across all columns.
- `table().getSortedRowModel()`: Handles sorting logic.
- `table().getFilteredRowModel()`: Handles filtering logic.

#### Usage
- Click a column header to sort (ascending/descending).
- Enter text in the search field to filter rows (debounced for performance).

### 4. Pagination

The grid supports pagination with configurable page sizes.

#### Key Functions
- `setPagination`: Updates the page index and size.
- `table().getPaginationRowModel()`: Manages paginated data.
- `pageCount`: Returns the total number of pages.

#### Usage
- Use the pagination controls to navigate pages.
- Select a page size (e.g., 5, 10, 25, 50, 100) from the dropdown.

### 5. Exporting Data

The grid supports exporting to Excel and PDF formats.

#### Key Functions
- `exportToExcel`: Exports the grid data to an Excel file with proper column widths, row heights, and grouping hierarchy.
- `exportToPDF`: Exports the grid data to a PDF file with formatted headers and grouped rows.

#### Usage
- Click the Excel icon to download the data as `data_export.xlsx`.
- Click the PDF icon to download the data as `data_export.pdf`.

#### Example
```tsx
<IconButton onClick={exportToExcel} title="Export to Excel"><ExcelIcon /></IconButton>
<IconButton onClick={exportToPDF} title="Export to PDF"><PdfIcon /></IconButton>
```

### 6. Rendering Rows

Custom rendering for grouped and non-grouped rows.

#### Key Functions
- `RenderRow`: Renders a row, handling grouped rows with expand/collapse icons and indentation.
- `tableRowStyle(row: Row<T>)`: Applies styles to hide sub-rows when their parent group is collapsed.

#### Usage
- Grouped rows display with an expand/collapse icon and a formatted group value.
- Non-grouped rows display data aligned with column definitions.

## Notes
- Ensure `dataSource` and `columns` are properly typed to match the data structure.
- Use the `grouping.formatter` for custom group value formatting.
- The grid is responsive and uses Material-UI components for styling.
- Exports maintain grouping hierarchy and formatting for a consistent user experience.

This guide covers the core functionality of `CkDataGrid`. Refer to the component source for advanced customization and additional utility functions.