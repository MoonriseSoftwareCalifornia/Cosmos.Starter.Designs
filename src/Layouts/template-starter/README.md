# Template Starter

A framework-agnostic starter template with a modular component system for Cosmos CMS. This template provides a foundation that can be customized with any CSS framework (Bootstrap, Tailwind, Bulma, etc.) or custom styles.

## Features

- 🚀 **Framework Agnostic**: Works with any CSS framework or custom styles
- 🧩 **Modular Components**: Separate files for header, footer, styles, and content
- 🔧 **Build System**: Automated HTML generation from components
- 🌐 **Cosmos CMS Compatible**: Built-in support for Cosmos CMS features
- 📱 **Responsive Foundation**: Basic responsive design structure
- ♿ **Accessible**: Semantic HTML structure with accessibility considerations

## Quick Start

1. **Copy this template** to create your new layout
2. **Choose your CSS framework** (optional)
3. **Customize the components** in the `_source` folder
4. **Build your templates** using the build script
5. **Deploy** to your Cosmos CMS instance

## Directory Structure

```
template-starter/
├── _source/                          # Source files (edit these)
│   ├── base-template.html           # Main template structure
│   ├── layout-components/           # Reusable layout components
│   │   ├── head.html               # Meta tags, CSS links
│   │   ├── styles.html             # CSS styles
│   │   ├── header.html             # Site header
│   │   └── footer.html             # Site footer
│   └── content/                     # Page-specific content
│       └── home/                    # Home page content
│           └── content.html         # Main home page content
├── build-templates.js               # Build script
├── package.json                     # Node.js configuration
├── catalog.json                     # Cosmos CMS page catalog
└── ckeditor-content.css            # CKEditor content styles
```

## Customization Guide

### 1. Choose Your CSS Framework

Edit `_source/layout-components/head.html` to add your preferred framework:

**Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

**Tailwind CSS:**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Bulma:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
```

### 2. Customize Styles

Edit `_source/layout-components/styles.html`:
- Replace the basic styles with framework-specific classes
- Add custom CSS for your brand
- Include responsive design rules

### 3. Update Layout Components

- **Header** (`_source/layout-components/header.html`): Add navigation, logo, branding
- **Footer** (`_source/layout-components/footer.html`): Add copyright, links, contact info
- **Head** (`_source/layout-components/head.html`): Add meta tags, analytics, fonts

### 4. Add Content

Edit `_source/content/home/content.html`:
- Replace placeholder content with your actual content
- Use `contenteditable="true"` for CMS-editable sections
- Add additional page content folders as needed

### 5. Build Your Templates

Run the build script to generate the final HTML files:

```bash
npm run build
```

Or directly:

```bash
node build-templates.js
```

## Adding New Pages

1. Create a new folder in `_source/content/` (e.g., `about`)
2. Add a `content.html` file with your page content
3. Optionally add `head.html` and `end.html` for page-specific code
4. Run the build script to generate the new page

## Page-Specific Customization

For any page, you can add:

- **`head.html`**: Additional head content (meta tags, CSS, JavaScript)
- **`end.html`**: Additional content before closing body tag (JavaScript, analytics)
- **`content.html`**: Main page content (required)

## Cosmos CMS Integration

This template includes required Cosmos CMS elements:

- `<cosmos-layout-header>` and `</cosmos-layout-header>` tags
- `<cosmos-layout-footer>` and `</cosmos-layout-footer>` tags
- Proper head injection point for Cosmos CMS
- CKEditor content styles for live editing

## Development Workflow

1. **Edit** source files in `_source/`
2. **Build** templates with `npm run build`
3. **Test** generated HTML files
4. **Deploy** to Cosmos CMS
5. **Repeat** as needed

## Framework Examples

### Bootstrap 5 Integration

1. Add Bootstrap CSS to `head.html`
2. Update `header.html` with Bootstrap navbar
3. Use Bootstrap classes in `content.html`
4. Add Bootstrap JavaScript to `end.html` if needed

### Tailwind CSS Integration

1. Add Tailwind script to `head.html`
2. Replace utility classes in `styles.html`
3. Use Tailwind classes throughout components
4. Configure Tailwind for production builds

### Custom CSS Integration

1. Keep or modify the basic styles in `styles.html`
2. Add your custom CSS classes
3. Create your own design system
4. Maintain responsive design principles

## Tips

- Always run the build script after making changes
- Use semantic HTML for better accessibility
- Test on multiple devices and browsers
- Keep Cosmos CMS compatibility in mind
- Use `contenteditable="true"` for editable content areas

## Support

This is a starter template. Customize it according to your project's specific needs and requirements.
