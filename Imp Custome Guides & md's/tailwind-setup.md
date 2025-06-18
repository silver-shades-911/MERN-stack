Sure, I can create a well-formatted document that you can easily download or copy. I'll use Markdown, which is a plain text formatting syntax that can be easily converted to other formats (like PDF or HTML) or simply read as a text file. It also ensures that all commands and code blocks are nicely formatted.

Here are the search queries I will use to ensure I capture the best practices for Markdown formatting and common download options.
I'll create the document in Markdown (`.md` file format). This is ideal because:
* It's plain text, so you can open it with any text editor.
* It supports rich formatting (headings, code blocks, lists, bold text) that looks great when rendered in VS Code's Markdown preview, GitHub, or online Markdown viewers.
* You can easily convert it to PDF or HTML if needed using various online tools or VS Code extensions.

---

```markdown
# Tailwind CSS v4 Setup Guide for Vite + React Projects

This guide provides a robust and repeatable process to set up Tailwind CSS v4 in your Vite with React projects, including theme customization and VS Code configurations for an enhanced developer experience.

## Table of Contents

1.  [Prerequisites](#1-prerequisites)
2.  [Step 1: Create a New Vite + React Project](#step-1-create-a-new-vite--react-project)
3.  [Step 2: Install Tailwind CSS v4 and its Vite Plugin](#step-2-install-tailwind-css-v4-and-its-vite-plugin)
4.  [Step 3: Configure Vite for Tailwind CSS](#step-3-configure-vite-for-tailwind-css)
5.  [Step 4: Create/Configure Tailwind CSS Configuration File (`tailwind.config.js`)](#step-4-createconfigure-tailwind-css-configuration-file-tailwindconfigjs)
6.  [Step 5: Import Tailwind CSS into your Main CSS File (`src/index.css`)](#step-5-import-tailwind-css-into-your-main-css-file-srcindexcss)
7.  [Step 6: Customize Your Theme and Create Custom Utilities (Tailwind CSS v4 Specific)](#step-6-customize-your-theme-and-create-custom-utilities-tailwind-css-v4-specific)
8.  [Step 7: Remove `postcss.config.js`](#step-7-remove-postcssconfigjs)
9.  [Step 8: Configure VS Code for Enhanced Developer Experience](#step-8-configure-vs-code-for-enhanced-developer-experience)
10. [Step 9: Install Stylelint Dependencies (Addressing `ERESOLVE` Conflicts)](#step-9-install-stylelint-dependencies-addressing-eresolve-conflicts)
11. [Step 10: Start Your Development Server and Test](#step-10-start-your-development-server-and-test)
12. [Final Checklist](#final-checklist)

---

## 1. Prerequisites

Before you start, ensure you have the following installed on your system:

* **Node.js (LTS version recommended):** Includes npm.
    * Verify installation:
        ```bash
        node -v
        npm -v
        ```
* **A Code Editor:** Visual Studio Code (VS Code) is highly recommended for its excellent extension support.

---

## Step 1: Create a New Vite + React Project

Open your terminal and navigate to the directory where you want to create your project. Then, run the following commands:

```bash
# Create a new Vite project with React template
npm create vite@latest my-react-app -- --template react

# Navigate into your new project directory
cd my-react-app

# Install initial project dependencies
npm install
```

---

## Step 2: Install Tailwind CSS v4 and its Vite Plugin

Navigate to your project root (`my-react-app`) and install Tailwind CSS and its dedicated Vite plugin:

```bash
# Install Tailwind CSS and its Vite plugin as development dependencies
npm install -D tailwindcss @tailwindcss/vite
```

---

## Step 3: Configure Vite for Tailwind CSS

Open your Vite configuration file (`vite.config.js` or `vite.config.ts`) and update it to include the Tailwind CSS Vite plugin.

**`vite.config.js`**
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the Tailwind CSS Vite plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add the Tailwind CSS Vite plugin here
  ],
});
```

---

## Step 4: Create/Configure Tailwind CSS Configuration File (`tailwind.config.js`)

While Tailwind CSS v4 emphasizes CSS-first configuration, `tailwind.config.js` is still crucial for defining content paths (where Tailwind should scan for classes) and custom plugins.

Create `tailwind.config.js` in your project root if it doesn't exist. Ensure its `content` array correctly points to your source files:

**`tailwind.config.js`**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // Scans your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Essential: Scans all JS/TS/JSX/TSX files in src/
  ],
  theme: {
    extend: {
      // While you can still use this for JS-based theme extension (backward compatibility),
      // the CSS-first approach using `@theme` in `src/index.css` is preferred for v4.
    },
  },
  plugins: [],
}
```

---

## Step 5: Import Tailwind CSS into your Main CSS File (`src/index.css`)

Tailwind CSS v4 simplifies the import process.

Open `src/index.css` (or your primary CSS file, typically linked in `main.jsx`/`main.tsx` or `App.jsx`/`App.tsx`) and replace its content with a single `@import` directive:

**`src/index.css`**
```css
/* src/index.css */

@import "tailwindcss";

/*
  Add your custom global styles below this import.
  However, remember that Tailwind's utility-first approach generally discourages
  extensive custom CSS outside of its system.
*/
```

---

## Step 6: Customize Your Theme and Create Custom Utilities (Tailwind CSS v4 Specific)

In Tailwind CSS v4, the primary way to define your design tokens (colors, spacing, fonts) and custom utilities is directly within your main CSS file (`src/index.css`) using the new `@theme` and `@utility` at-rules.

**Example `src/index.css` with Customizations:**

```css
/* src/index.css */

@import "tailwindcss";

/*
  @theme: Use this to define your design tokens (colors, spacing, fonts, etc.).
  Tailwind automatically generates corresponding utility classes (e.g., bg-brand-primary, font-heading).
  Prefixes like --color-, --font-, --spacing- are crucial for proper generation.
*/
@theme {
  /* Custom Colors */
  --color-brand-primary: #ff5733;
  --color-brand-secondary: #337bff;
  --color-custom-green: #2ecc71;

  /* Custom Color Shades (follow Tailwind's naming convention for shades if desired) */
  --color-my-gray-100: #f0f0f0;
  --color-my-gray-500: #888888;
  --color-my-gray-900: #1a1a1a;

  /* Custom Font Families */
  --font-heading: 'Roboto', sans-serif;
  --font-body: 'Open Sans', sans-serif;

  /* Custom Spacing Units (Tailwind uses 0-96 by default, extend as needed) */
  --spacing-128: 32rem; /* Generates e.g., w-128, h-128, p-128, m-128 */

  /* Custom Text Sizes (use --text- prefix) */
  --text-2xl-custom: 1.625rem; /* Generates e.g., text-2xl-custom */
}

/*
  @utility: Use this to create custom utility classes that combine multiple Tailwind utilities
  or define new CSS properties. These utilities automatically work with all variants
  (e.g., `hover:btn-primary`, `md:my-custom-text`).
*/
@utility btn-primary {
  @apply px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md;
}

@utility my-custom-text {
  @apply text-lg tracking-wide;
  line-height: 1.6; /* You can also add raw CSS properties */
}

/*
  @layer components: Use this for defining custom component styles that you apply
  with a specific class name (e.g., `<div className="card">`).
  Use `@apply` inside to compose existing Tailwind utilities.
*/
@layer components {
  .card {
    @apply bg-white rounded-lg shadow-xl p-6;
  }

  .card-title {
    @apply text-2xl font-bold text-gray-800 mb-4;
  }
}

/* Add any other global custom CSS below this, if absolutely necessary */
body {
  font-family: var(--font-body, sans-serif); /* Example of using a theme variable in raw CSS */
}
```

---

## Step 7: Remove `postcss.config.js`

With the `@tailwindcss/vite` plugin, a separate `postcss.config.js` file is generally **no longer required** for most setups unless you are integrating other specific PostCSS plugins. You can typically delete it from your project root if it exists.

---

## Step 8: Configure VS Code for Enhanced Developer Experience

These VS Code settings and extensions are crucial for correct IntelliSense, linting, and formatting for Tailwind CSS v4 and your overall development workflow.

1.  **Install VS Code Extensions:**
    * **Tailwind CSS IntelliSense** (Publisher: Tailwind Labs) - Essential for auto-completion, hover previews, and linting of Tailwind classes.
    * **Stylelint** (Publisher: Stylelint) - Provides CSS linting directly in your editor.
    * **Prettier - Code formatter** (Publisher: Esben Petersen) - For consistent code formatting.

2.  **Update `settings.json` (VS Code User or Workspace Settings):**
    Open your VS Code `settings.json` (Go to `File > Preferences > Settings`, then click the curly braces icon `{}` in the top right to "Edit in settings.json") and add/update the following:

    ```json
    {
        // Keep your existing settings (like Prettier default formatters, explorer options, git settings)
        "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
        "explorer.confirmDragAndDrop": false,
        "[html]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
        "explorer.confirmDelete": false,
        "[css]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
        "[javascriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
        "diffEditor.ignoreTrimWhitespace": false,
        "deepseek.lang": "en",
        "editor.overtypeOnPaste": false,
        "git.enableSmartCommit": true,
        "javascript.updateImportsOnFileMove.enabled": "always",
        "workbench.iconTheme": "vscode-icons",
        "git.confirmSync": false,
        "git.autofetch": true,
        "editor.pasteAs.preferences": [],

        // --- ADDITIONS FOR TAILWIND CSS V4 & STYLELINT ---

        // File associations for Tailwind CSS IntelliSense to recognize custom syntax
        "files.associations": {
            "*.css": "tailwindcss",
            "*.scss": "tailwindcss",  // Include if you use SCSS with Tailwind
            "*.pcss": "postcss"       // Optional: for generic PostCSS files
        },

        // Disable VS Code's built-in CSS validation to prevent conflicts with Stylelint
        "css.validate": false,
        "less.validate": false,
        "scss.validate": false,

        // Enable Stylelint validation for these languages/file types
        "stylelint.validate": [
            "css",
            "scss",
            "postcss" // Essential for Tailwind CSS files
        ],

        // Optional: Enable auto-fix on save for Stylelint
        "editor.codeActionsOnSave": {
            "source.fixAll.stylelint": "explicit"
        }

        // --- END ADDITIONS ---
    }
    ```

3.  **Configure Stylelint (`.stylelintrc.json`):**
    Create a file named `.stylelintrc.json` in your **project root** and add the following configuration. This tells Stylelint to recognize Tailwind's custom at-rules (`@theme`, `@utility`, etc.) and to extend Tailwind's own Stylelint rules.

    **`.stylelintrc.json`**
    ```json
    {
      "extends": [
        "stylelint-config-recommended",
        "stylelint-config-prettier",
        "stylelint-config-tailwindcss/standard"
      ],
      "rules": {
        "at-rule-no-unknown": [
          true,
          {
            "ignoreAtRules": [
              "tailwind",
              "apply",
              "variants",
              "responsive",
              "screen",
              "theme",   // Important: To recognize Tailwind CSS v4's @theme
              "utility", // Important: To recognize Tailwind CSS v4's @utility
              "layer",
              "import",  // Often useful to include for `@import` statements
              "config",
              "source",
              "custom-variant",
              "plugin"
            ]
          }
        ]
      }
    }
    ```

---

## Step 9: Install Stylelint Dependencies (Addressing `ERESOLVE` Conflicts)

This step specifically addresses potential peer dependency conflicts with Stylelint and its configurations. Choose the option that works best for you.

**Option A: Recommended (Resolve Conflicts by Upgrading Stylelint and its Ecosystem)**

This is the preferred approach as it ensures true compatibility by attempting to install the latest versions of `stylelint` and its related configuration packages that work together.

```bash
# 1. Clean existing stylelint related packages (important for a fresh start)
npm uninstall stylelint stylelint-config-standard stylelint-order stylelint-declaration-block-no-ignored-properties stylelint-prettier stylelint-config-recommended stylelint-config-prettier stylelint-config-tailwindcss

# 2. Install latest compatible versions (this will try to get stylelint v16.x and compatible configs)
npm install -D stylelint@latest stylelint-config-standard@latest stylelint-order@latest stylelint-declaration-block-no-ignored-properties@latest stylelint-prettier@latest stylelint-config-recommended@latest stylelint-config-tailwindcss@latest
```

**Option B: Quick Fix (Use `--legacy-peer-deps` - Use with Caution)**

If Option A consistently fails with `ERESOLVE` errors and you need to proceed quickly, you can use `--legacy-peer-deps`. This flag forces the installation by ignoring peer dependency conflicts, but it **might lead to runtime issues or unexpected behavior** if the installed versions are truly incompatible.

```bash
npm install -D stylelint-config-standard stylelint-order stylelint-declaration-block-no-ignored-properties stylelint-prettier stylelint-config-recommended stylelint-config-prettier stylelint-config-tailwindcss --legacy-peer-deps
```
*It's crucial to acknowledge that if you run into unexpected styling or linting issues later, the `--legacy-peer-deps` flag is a likely culprit, and you should consider re-attempting Option A with more specific version requirements or by checking the npm `ERESOLVE` report.*

---

## Step 10: Start Your Development Server and Test

After all configurations and installations, **reload your VS Code window** (e.g., `Ctrl+Shift+P` or `Cmd+Shift+P`, then search for "Reload Window") to ensure all new settings and extensions are loaded.

Then, start your development server:

```bash
npm run dev
```

Open your browser to the provided URL (e.g., `http://localhost:5173/`).

You can now start adding Tailwind CSS classes to your React components (e.g., `src/App.jsx`). The "Unknown at rule" errors for `@theme`, `@utility` should now be gone, and you should have full IntelliSense and linting support.

**Example `src/App.jsx` usage:**

```jsx
// src/App.jsx
// Ensure your main CSS file is imported somewhere in your application entry point
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-my-gray-100 p-8">
      <h1 className="text-6xl font-heading text-brand-primary mb-8 text-center my-custom-text">
        Hello GIFFY with Tailwind v4!
      </h1>
      <button className="btn-primary hover:bg-blue-700 transition-colors duration-300">
        Discover GIFs
      </button>
      <div className="card mt-12 w-96 text-center">
        <h2 className="card-title">My Awesome Card</h2>
        <p className="text-gray-600">
          This is a custom card component styled with Tailwind.
        </p>
      </div>
      <div className="mt-8 w-128 h-64 bg-my-gray-900 rounded-lg flex items-center justify-center text-white text-xl">
        A div using custom spacing `w-128` and custom gray color `bg-my-gray-900`
      </div>
    </div>
  );
}

export default App;
```

---

## Final Checklist

Before concluding your setup, quickly review these points:

* [ ] **Node.js & npm:** Installed and up-to-date.
* [ ] **Vite Project:** Created successfully.
* [ ] **`tailwindcss` & `@tailwindcss/vite`:** Installed as `devDependencies`.
* [ ] **`vite.config.js`:** `tailwindcss()` plugin added.
* [ ] **`tailwind.config.js`:** `content` array correctly configured to scan your source files.
* [ ] **`src/index.css`:** Contains `@import "tailwindcss";` at the very top, followed by your `@theme`, `@utility`, and `@layer components` definitions.
* [ ] **`postcss.config.js`:** Removed (unless you have a very specific advanced PostCSS setup).
* [ ] **VS Code Extensions:** Tailwind CSS IntelliSense, Stylelint, and Prettier are installed.
* [ ] **VS Code `settings.json`:** Updated with `files.associations`, `css.validate: false` (and for `less`/`scss`), and `stylelint.validate`.
* [ ] **`.stylelintrc.json`:** Created in the project root with `ignoreAtRules` including `"theme"` and `"utility"`.
* [ ] **Stylelint Dependencies:** Installed successfully, ideally by resolving conflicts (Option A).
* [ ] **VS Code Reloaded:** After all changes.
* [ ] **Development Server:** Running without errors (`npm run dev`).

---

**To Download this Guide:**

1.  **Copy the entire text** above.
2.  **Paste it into a plain text file** on your computer.
3.  **Save the file** with a `.md` extension (e.g., `Tailwind_V4_React_Vite_Setup.md`).

You can then open this `.md` file in VS Code, and it will render with proper formatting, code highlighting, and links, making it easy to follow for your future projects!