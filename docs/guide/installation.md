# Installation Guide

This guide provides step-by-step instructions for installing the `@centrickernel/solid-core` package (version `^1.0.0`) in a SolidJS project. The package is assumed to be a utility or core library for SolidJS applications, potentially used with components like `CkTabs` or `CkDataGrid`. The guide covers setting up a SolidJS project, installing the package, and integrating it into your application.

## Prerequisites

- **Node.js**: Version 18 or later (includes `npm`). Verify with:
  ```bash
  node -v
  npm -v
  ```
- **Code Editor**: VS Code or any editor of your choice.
- **Terminal**: For running commands (e.g., Command Prompt, PowerShell, or a Unix-based terminal).
- **Basic Knowledge**: Familiarity with JavaScript/TypeScript, SolidJS, and npm.

## Step 1: Create a SolidJS Project

1. **Initialize a new SolidJS project** using the official TypeScript template:
   ```bash
   npx degit solidjs/templates/ts my-solid-app
   cd my-solid-app
   ```
   This sets up a TypeScript-based SolidJS project. For JavaScript, use:
   ```bash
   npx degit solidjs/templates/js my-solid-app
   ```

2. **Install core dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server** to verify the setup:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to see the default SolidJS app.

## Step 2: Install @centrickernel/solid-core

1. **Install the package**:
   Assuming `@centrickernel/solid-core` is available on npm, run:
   ```bash
   npm install @centrickernel/solid-core@latest --save-dev
   ```
   This installs version `1.0.0` or the latest compatible version within the `^1.0.0` range.

2. **Verify installation**:
   Check `package.json` to confirm the dependency:
   ```json
   "devDependencies": {
     "@centrickernel/solid-core": "^1.0.0",
     ...
   }
   ```
   If the package is not found on npm, it may be a private package or hosted on a custom registry. Contact the package maintainer or check for a GitHub repository (e.g., `https://github.com/centrickernel/solid-core`) for installation instructions. Alternatively, if it’s a local package, copy its files to your project and install via:
   ```bash
   npm install ./path/to/solid-core
   ```

## Step 3: Install Additional Dependencies (Optional)

If you plan to use `@centrickernel/solid-core` with components like `CkTabs` or `CkDataGrid` (from previous context), you may need additional dependencies:

1. **Install `@suid/material`** for Material-UI components (used in `CkTabs`):
   ```bash
   npm install @suid/material
   ```

2. **Verify SolidJS**:
   The SolidJS template includes `solid-js`. Ensure the version is compatible (e.g., `^1.8.0`):
   ```json
   "solid-js": "^1.8.0"
   ```
   Update if necessary:
   ```bash
   npm install solid-js@latest
   ```

3. **Other dependencies** (if using `CkDataGrid`):
   For components like `CkDataGrid`, install additional packages:
   ```bash
   npm install @tanstack/solid-table @solid-primitives/scheduled jspdf jspdf-autotable exceljs file-saver
   ```

## Step 4: Integrate @centrickernel/solid-core

Since the exact functionality of `@centrickernel/solid-core` is unknown, this step provides a generic integration example. Adjust based on the package’s documentation (if available).

1. **Create a component directory**:
   ```bash
   mkdir src/components
   ```
2. **Use the package**:
   Modify `src/App.tsx` to include the component:
   ```tsx
   import ExampleComponent from './components/ExampleComponent';

   function App() {
     return (
       <div style={{ padding: '20px' }}>
         <ExampleComponent />
       </div>
     );
   }

   export default App;
   ```

3. **Test the integration**:
   Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to verify the component renders correctly.

## Step 5: Integrate with CkTabs (Optional)

If `@centrickernel/solid-core` is intended for use with the `CkTabs` component, ensure `CkTabs` is set up as described in the previous guide. Example usage:

1. **Add CkTabs**:
   Copy the `CkTabs` and `CkTab` code to `src/components/CkTabs.tsx` (as provided previously).

2. **Use CkTabs with solid-core**:
   Modify `src/App.tsx`:
   ```tsx
   import { CkTabs, CkTab } from '@centrickernel/solid-core';

   function App() {
     return (
       <div style={{ padding: '20px' }}>
         <h1>Tabbed Interface</h1>
         <CkTabs>
           <CkTab label="Tab 1">
             <div>Content for Tab 1</div>
           </CkTab>
           <CkTab label="Tab 2">
             <div>Content for Tab 2</div>
           </CkTab>
         </CkTabs>
       </div>
     );
   }

   export default App;
   ```

3. **Test**:
   Run `npm run dev` and verify the tabs switch correctly, with `solid-core` enhancing the content.

## Step 6: Build for Production

1. **Build the project**:
   ```bash
   npm run build
   ```
   This generates optimized files in the `dist` folder.

2. **Serve the build** (optional):
   Install a simple server:
   ```bash
   npm install -g serve
   serve -s dist
   ```
   Open `http://localhost:5000` to test the production build.

## Troubleshooting

- **Error: Package not found**:
  If `npm install @centrickernel/solid-core` fails, verify the package name and version. Check npmjs.com or the package’s repository. If it’s private, configure your `.npmrc` with registry credentials or install from a local source.
- **Module not found**:
  Ensure imports in your code match the package’s exports. Check the package’s documentation for correct import paths.
- **Compatibility issues**:
  Confirm `@centrickernel/solid-core` is compatible with your `solid-js` version. Run:
  ```bash
  npm ls solid-js @centrickernel/solid-core
  ```
  Update dependencies if needed:
  ```bash
  npm install solid-js@latest @centrickernel/solid-core@latest
  ```
- **Build errors**:
  Clear the npm cache and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## Notes

- **Unknown Package**: As `@centrickernel/solid-core` is not found in public registries, this guide assumes it’s a standard npm package. If it’s custom or private, obtain installation instructions from the package maintainer.
- **TypeScript**: The guide uses a TypeScript template. For JavaScript, remove type annotations and use the JS template.
- **Dependencies**: Additional dependencies (e.g., `@suid/material`) are only needed if using components like `CkTabs`. Adjust based on your use case.
- **Documentation**: Check the package’s README or documentation for specific setup instructions or peer dependencies.

This guide provides a foundation for installing `@centrickernel/solid-core` in a SolidJS project. If you have specific details about the package’s purpose or additional context, please share, and I can refine the guide. For further customization, refer to the SolidJS documentation or component-specific guides.