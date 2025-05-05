# CkTabs Usage Guide

This guide outlines the main functions and usage of the `CkTabs` and `CkTab` components, which provide a tabbed interface built with SolidJS and Material-UI. The components support both static and dynamic tab registration, with a responsive and accessible design.

## Overview

The `CkTabs` component renders a tabbed interface where users can switch between different content panels. The `CkTab` component is used to define individual tabs dynamically within `CkTabs`. Tabs can be defined statically via props or dynamically via context-based registration, with features like active tab tracking and click event handling.

## Main Functions and Usage

### 1. CkTabs Component

The primary component for rendering the tabbed interface.

#### Props
- `tabs?: CkTabItem[]` - Optional array of static tab definitions, each with `id` (unique identifier), `label` (display name), and `content` (Accessor returning JSXElement).
- `children?: JSXElement` - Optional children, typically `CkTab` components for dynamic tab registration.
- `onTabClick?: (index: number, label: string) => void` - Optional callback triggered when a tab is clicked, receiving the tab index and label.

#### Key Functions
- `allTabs`: Combines static (`props.tabs`) and dynamic (`dynamicTabs`) tabs into a single array.
- `onTabHeaderClick(index: number)`: Sets the active tab and triggers the `onTabClick` callback.
- `registerTab(tab: CkTabItem)`: Registers a dynamic tab via the `TabsContext`.

#### Example (Static Tabs)
```tsx
import { CkTabs } from '@centrickernel/solid-core';
import { createSignal } from 'solid-js';

const App = () => {
  const tabs = [
    { id: '1', label: 'Tab 1', content: () => <div>Content for Tab 1</div> },
    { id: '2', label: 'Tab 2', content: () => <div>Content for Tab 2</div> },
  ];

  return (
    <CkTabs
      tabs={tabs}
      onTabClick={(index, label) => console.log(`Clicked tab ${index}: ${label}`)}
    />
  );
};
```

This example renders a tabbed interface with two static tabs, logging the index and label when a tab is clicked.

### 2. CkTab Component

Defines individual tabs dynamically within `CkTabs` using context-based registration.

#### Props
- `label: string` - The display name of the tab.
- `children: JSXElement` - The content to be displayed when the tab is active.

#### Key Functions
- Uses `onMount` to register the tab with the parent `CkTabs` via `TabsContext`.
- Generates a unique `id` for each tab using `createUniqueId`.

#### Usage
- Must be used inside a `CkTabs` component.
- Does not render directly; its content is managed by the parent `CkTabs`.

#### Example (Dynamic Tabs)
```tsx
import { CkTabs, CkTab } from '@centrickernel/solid-core';

const App = () => {
  return (
    <CkTabs>
      <CkTab label="Tab 1">
        <div>Content for Tab 1</div>
      </CkTab>
      <CkTab label="Tab 2">
        <div>Content for Tab 2</div>
      </CkTab>
    </CkTabs>
  );
};
```

This example dynamically registers two tabs using `CkTab` components within `CkTabs`.

### 3. Tab Switching and Active Tab Management

The active tab is managed reactively, with visual indicators for the selected tab.

#### Key Functions
- `activeTab`: Signal tracking the index of the currently active tab.
- `setActiveTab(index: number)`: Updates the active tab index.
- Renders the `content` of the active tab from `allTabs()[activeTab()]`.

#### Usage
- Click a tab header to switch to that tab.
- The active tab is highlighted with bold text, a hover effect, and an underline (`Divider`).

### 4. Tab Click Events

Custom behavior can be triggered when a tab is clicked.

#### Key Functions
- `onTabClick`: Callback invoked with the clicked tab’s index and label.

#### Usage
- Pass an `onTabClick` handler to `CkTabs` to handle tab selection events.

#### Example
```tsx
<CkTabs
  tabs={[{ id: '1', label: 'Tab 1', content: () => <div>Tab 1</div> }]}
  onTabClick={(index, label) => alert(`Selected ${label} at index ${index}`)}
/>
```

## Notes
- **Static vs. Dynamic Tabs**: Use `tabs` prop for predefined tabs or `CkTab` components for dynamic registration.
- **Context Requirement**: `CkTab` must be a child of `CkTabs` to access the `TabsContext`.
- **Accessibility**: Tab headers include ARIA attributes (`role`, `aria-selected`, `aria-controls`, `tabIndex`) for accessibility.
- **Styling**: Uses Material-UI components (`Paper`, `Button`, `Divider`) for a modern, responsive design.
- **Unique IDs**: Ensure static tab `id`s are unique; `CkTab` generates unique IDs automatically.

This guide covers the core functionality of `CkTabs` and `CkTab`. Refer to the component source for advanced customization and additional details.