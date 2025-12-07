# Cosmos / SkyCMS Starter Designs

Example site layouts and page templates that can be imported into Cosmos CMS (now SkyCMS). Each layout lives in `src/Layouts/<layout-name>` and includes a build script to generate finished HTML pages from source snippets.

## Requirements

- Node.js (for running `build-templates.js` in each layout folder)
- Optional: VS Code Static Web Apps extension for local static-site workflows

## Build workflow (per layout)

Each layout folder contains `build-templates.js`. Run it from inside that layout to regenerate the compiled pages:

```pwsh
cd src/Layouts/<layout-folder>
node build-templates.js
```

What the script does:

- Cleans existing generated `.html` files in the layout root (leaves `_source/` and `ckeditor-content.css` untouched).
- Merges `_source/base-template.html` with shared components in `_source/layout-components/` and page content in `_source/content/<page>/`.
- Supports optional `_source/content/<page>/head.html` and `_source/content/<page>/end.html` for per-page head/end injections.
- Writes `<page>.html` files next to the script and warns if required Cosmos/SkyCMS elements are missing.

### Build all layouts at once

From the repo root, run the helper script to execute every `build-templates.js` under `src/Layouts`:

```pwsh
pwsh -File build-layouts.ps1
```

The script walks each layout folder, runs its build, and returns you to the root when finished. Errors from any layout are shown inline so you can address them quickly.

## Add or edit a page in a layout

1. In `_source/content/`, create a folder per page (e.g., `_source/content/about/`).
2. Add `content.html` (required), plus optional `head.html` and `end.html` for page-specific head/end markup.
3. Add the page entry to that layout's `catalog.json`.
4. From the layout folder, run `node build-templates.js` to regenerate the compiled HTML.

## Add a new design

1. Fork the repo and copy `src/Layouts/template-starter/` to a new folder under `src/Layouts/`.
2. Update `_source/layout-components/head.html` with your CSS framework or custom styles.
3. Add or edit pages in `_source/content/`.
4. Run `node build-templates.js` inside your new layout folder to generate the `.html` outputs.
5. Open a pull request when ready. Once merged, your design joins the catalog.

If you have questions, please email: [support@moonrise.net](mailto:support@moonrise.net).
