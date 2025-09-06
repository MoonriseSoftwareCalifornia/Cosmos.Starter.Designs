# Template Starter Kit

This is a blank template that you can copy and customize to create your own Cosmos CMS templates. It includes all the necessary files and structure to get you started quickly.

## 🚀 Quick Start

1. **Copy this entire folder** to `src/Layouts/your-template-name/`
2. **Rename the folder** to your template name (e.g., `my-awesome-template`)
3. **Install dependencies**: `npm install` (optional, just for build script)
4. **Customize the files** (see guide below)
5. **Build your template**: `npm run build`
6. **Test your template** by opening the generated HTML files

## 📁 File Structure

```
your-template-name/
├── package.json              # Template metadata and build scripts
├── catalog.json             # Defines pages available in Cosmos CMS
├── ckeditor-content.css     # Styles for content editing in Cosmos CMS
├── base-template.html       # Main template structure with placeholders
├── build-templates.js       # Build script (don't modify unless needed)
├── _source/                 # Source files (will not be published)
│   ├── layout-components/   # Shared layout parts
│   │   ├── head.html       # <head> content (meta, CSS, title)
│   │   ├── header.html     # Navigation and header
│   │   ├── footer.html     # Footer and scripts
│   │   └── styles.html     # Additional CSS (optional)
│   └── content/            # Individual page content
│       └── home/           # Example home page
│           └── content.html # Required: main page content
│           ├── head.html   # Optional: page-specific CSS/meta
│           └── end.html    # Optional: page-specific scripts
└── Generated files will appear here after build:
    ├── layout.html         # For Cosmos CMS layout detection
    ├── home.html          # Generated home page
    └── ...                # Other generated pages
```

## 🎨 Customization Guide

### 1. Update Template Metadata

**package.json**: Change the name, description, and author
```json
{
  "name": "my-awesome-template",
  "description": "A beautiful responsive template",
  "author": "Your Name"
}
```

**catalog.json**: Define what pages your template offers
```json
{
    "Pages": [
        {
            "Title": "Home Page",
            "Type": "home",
            "Description": "Main landing page",
            "Path": "home.html"
        }
    ]
}
```

### 2. Design Your Layout Structure

**base-template.html**: The main HTML structure
- `{{PARTIAL:head}}` - Inserts head.html content
- `{{PARTIAL:header}}` - Inserts header.html content
- `{{PAGE_HEAD}}` - Page-specific head content (optional)
- `{{PAGE_CONTENT}}` - Main page content goes here
- `{{PAGE_END}}` - Page-specific scripts (optional)
- `{{PARTIAL:footer}}` - Inserts footer.html content

### 3. Create Layout Components

**_source/layout-components/head.html**:
- Add your CSS framework links (Bootstrap, Tailwind, etc.)
- Include meta tags, favicon, fonts
- Add your custom CSS
- **Must end with**: `<!-- COSMOS TEMPLATE LAYOUT HEAD -->`

**_source/layout-components/header.html**:
- Create your navigation menu
- Add logo/branding
- Include any header content

**_source/layout-components/footer.html**:
- Add footer content
- Include JavaScript libraries
- Add your custom JavaScript
- **Must end with**: `<!-- COSMOS TEMPLATE LAYOUT FOOTER -->`

### 4. Create Pages

For each page, create a folder in `_source/content/` (e.g., `home/`, `about/`, `contact/`):

**content.html** (required):
- Main content for the page
- **Must end with**: `<!-- COSMOS TEMPLATE CONTENT -->`

**head.html** (optional):
- Page-specific CSS
- Additional meta tags
- Page-specific stylesheets

**end.html** (optional):
- Page-specific JavaScript
- Analytics code
- Additional scripts

### 5. Add Pages to Catalog

Update `catalog.json` to include all your pages:
```json
{
    "Pages": [
        {
            "Title": "Home Page",
            "Type": "home",
            "Description": "Main landing page",
            "Path": "home.html"
        },
        {
            "Title": "About Page",
            "Type": "content",
            "Description": "About us information",
            "Path": "about.html"
        }
    ]
}
```

### 6. Style Content for CKEditor

**ckeditor-content.css**: Copy your main content styles here so they appear correctly when editing in Cosmos CMS.

## 🔧 Building Your Template

Run the build command to generate your HTML files:
```bash
npm run build
```

This will:
1. Clean up old generated files
2. Combine your layout components with page content
3. Generate HTML files for each page
4. Validate Cosmos CMS compatibility

## ✅ Cosmos CMS Requirements

Your template must include these special comments for Cosmos CMS to work properly:

- `<!-- COSMOS TEMPLATE LAYOUT HEAD -->` in head.html
- `<!-- COSMOS TEMPLATE LAYOUT FOOTER -->` in footer.html
- `<!-- COSMOS TEMPLATE CONTENT -->` in each content.html

The build script will validate these are present.

## 🎯 Tips for Success

1. **Start Simple**: Begin with just a home page, then add more pages
2. **Use a CSS Framework**: Bootstrap, Tailwind, or Bulma make development faster
3. **Test Responsiveness**: Make sure your template works on mobile
4. **Optimize Performance**: Minimize CSS/JS and optimize images
5. **Follow Accessibility**: Use semantic HTML and proper ARIA labels
6. **Test in Cosmos CMS**: Upload your template and test content editing

## 📝 Example Workflow

1. Design your layout in `base-template.html`
2. Split common elements into layout components
3. Create your first page in `_source/content/home/`
4. Build and test: `npm run build`
5. Add more pages as needed
6. Update `catalog.json` with new pages
7. Test final template in Cosmos CMS

## 🆘 Common Issues

**Build fails**: Check that all required files exist and comments are present
**Styles missing in CKEditor**: Copy styles to `ckeditor-content.css`
**Page not showing in catalog**: Make sure it's listed in `catalog.json`
**Layout broken**: Verify `base-template.html` has all placeholders

---

Happy template building! 🎉
