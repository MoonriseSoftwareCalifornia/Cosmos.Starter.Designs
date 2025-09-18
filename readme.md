# Template Starter

A simple starter template with modular components for Cosmos CMS. Copy this template and customize it with your preferred CSS framework or custom styles.

## How to Add Your Design

Thank you for contributing!  Your help is very much appreciated!

1. This repository is an Azure Static website built with Visual Studio Code with the [Static Website plugin](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps). You may want to install this before continuing.
2. "Fork" [this repository](https://github.com/CosmosSoftware/Cosmos.Starter.Layouts).
3. Copy the folder located in "[Layouts/template-starter/]".  This is an example design that is "blank." Within it are notes and comments that can help you create a new design.
4. Add your CSS framework to `_source/layout-components/head.html`
5. Add your pages in `_source/content/`
6. Run `node build-templates.js` to generate HTML files
7. Once you are ready to contribute, create a "pull request."

Once the pull request is accepted and code is merged, your design will be added to the others.

If you have questions, please email: notifications@cosmosws.io.

## Adding Pages

1. Create folder in `_source/content/` (e.g., `about`)
2. Add `content.html` file
3. Optionally, add a `head.html` file for page-specific head content
4. Optionally, add a `end.html` file for page-specific end content
5. Add page entry in `catalog.json`
6. Run build script `node build-templates.js` to generate the full HTML files for the pages you've created in the `_source/content/` folder, ready for Cosmos CMS.

## Structure

```
template-starter/
├── _source/                    # Edit these files
│   ├── base-template.html     # Main template
│   ├── layout-components/     # Header, footer, styles that *all* web pages in your website will need.
│   └── content/home/          # Page content
├── build-templates.js         # Generates HTML files
└── catalog.json              # Page definitions
```

### Add Your CSS Framework

Edit `_source/layout-components/head.html`:

```html
<!-- ADD LAYOUT HEAD CONTENT HERE -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```