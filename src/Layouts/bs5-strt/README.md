# Bootstrap 5 Starter Template - Enhanced Partial Template System

This template uses an enhanced partial template system that supports **all three Cosmos CMS injection points**: page content, page-specific head content, and page-specific end content.

## 🏗️ Structure

```
bs5-strt/
├── _source/                          # Source files (edit these)
│   ├── layout-components/
│   │   ├── head.html                # HTML head content (CSS, meta tags)
│   │   ├── header.html              # Header/navigation content  
│   │   ├── footer.html              # Footer content and scripts
│   │   └── styles.html              # Shared CSS styles
│   ├── content/
│   │   ├── layout/
│   │   │   └── content.html         # Example content for layout.html preview
│   │   ├── home/
│   │   │   └── content.html         # Content for home.html
│   │   ├── about/
│   │   │   └── content.html         # Content for about.html
│   │   ├── contact/
│   │   │   ├── content.html         # Main content
│   │   │   ├── head.html            # Custom CSS & meta tags (optional)
│   │   │   └── end.html             # Custom JavaScript (optional)
│   │   └── gallery/
│   │       ├── content.html         # Main content
│   │       ├── head.html            # Lightbox CSS & meta tags (optional)
│   │       └── end.html             # Lightbox JavaScript (optional)
│   └── base-template.html           # Base template with placeholders
├── build-templates.js               # Build script
├── package.json                     # NPM configuration
└── [Generated Files]                # Complete HTML files (don't edit directly)
    ├── layout.html                  # Generated layout file
    ├── home.html                    # Generated home file
    ├── about.html                   # Generated about file
    ├── contact.html                 # Generated contact file (with custom head/end)
    └── gallery.html                 # Generated gallery file (with custom head/end)
```

## 🚀 Quick Start

### Building Templates
```bash
npm run build
```

### Adding a New Page

**Simple Page (content only):**
1. Create folder: `_source/content/services/`
2. Create file: `_source/content/services/content.html` with just the page content
3. Run `npm run build`
4. Your complete `services.html` file will be generated

**Enhanced Page (with custom head/end content):**
1. Create folder: `_source/content/portfolio/`
2. Create files:
   - `_source/content/portfolio/content.html` (required - main content)
   - `_source/content/portfolio/head.html` (optional - custom CSS, meta tags)
   - `_source/content/portfolio/end.html` (optional - custom JavaScript)
3. Run `npm run build`
4. Your complete `portfolio.html` file will be generated with custom features

### Editing Layout Components
1. Edit files in `_source/layout-components/` to modify header, footer, head, or styles
2. Run `npm run build`
3. All pages will be updated with your changes

## 📝 Example: Adding a Gallery Page with Lightbox

Create folder and files:
```
_source/content/gallery/
├── content.html    # Main gallery HTML
├── head.html       # Lightbox CSS + custom styles
└── end.html        # Lightbox JavaScript + initialization
```

**content.html:**
```html
<div class="col-lg-10 mx-auto p-3 py-md-5">
  <main>
    <h1>Photo Gallery</h1>
    <div class="gallery-grid">
      <a href="image-large.jpg" data-lightbox="gallery">
        <img src="image-thumb.jpg" alt="Gallery Image">
      </a>
    </div>
  </main>
</div>
```

**head.html:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightbox2@2.11.3/dist/css/lightbox.min.css">
<meta name="description" content="Browse our stunning photo gallery">
```

**end.html:**
```html
<script src="https://cdn.jsdelivr.net/npm/lightbox2@2.11.3/dist/js/lightbox.min.js"></script>
<script>
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});
</script>
```

Run `npm run build` and `contact.html` will be generated automatically!

## ✅ Benefits

- **No Code Duplication**: Edit header/footer once, applies everywhere
- **Full Cosmos CMS Support**: Supports all 3 injection points (head, content, end)
- **Optional Customization**: Simple pages stay simple, complex pages get full control
- **Consistency**: All pages use the same layout structure
- **Easy Updates**: Change Bootstrap version in one place
- **Folder Organization**: Clear separation of concerns
- **Cosmos CMS Compatible**: Generated files work perfectly with Cosmos CMS
- **Static Preview**: Complete HTML files for static hosting

## 🔧 How It Works

1. The build script reads `base-template.html`
2. Replaces `{{PARTIAL:name}}` placeholders with content from `partials/`
3. Replaces `{{PAGE_CONTENT}}` with content from `pages/`
4. Generates complete HTML files that Cosmos CMS expects
5. Validates that all required Cosmos elements are present

## 🎯 Cosmos CMS Integration

The generated files include all required Cosmos CMS elements:
- `<cosmos-layout-header>` and `</cosmos-layout-header>`
- `<cosmos-layout-footer>` and `</cosmos-layout-footer>`
- `<!-- PAGE-SPECIFIC HEAD CONTENT WILL BE INJECTED BY COSMOS HERE -->`

## 📋 Commands

- `npm run build` - Build all template files
- `npm run clean` - Remove generated files (Linux/Mac)
- `npm run dev` - Alias for build
