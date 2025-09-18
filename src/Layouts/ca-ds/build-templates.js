const fs = require('fs');
const path = require('path');

function buildTemplate(templateName, layoutPath, pageFolder, outputPath) {
    console.log(`Building ${templateName}...`);
    
    // Read the base template
    const baseTemplatePath = path.join(layoutPath, '_source', 'base-template.html');
    let template = fs.readFileSync(baseTemplatePath, 'utf8');
    
    // Read all layout components
    const componentsDir = path.join(layoutPath, '_source', 'layout-components');
    const componentFiles = fs.readdirSync(componentsDir);
    
    // Replace all component placeholders
    componentFiles.forEach(file => {
        if (file.endsWith('.html')) {
            const componentName = file.replace('.html', '');
            const componentContent = fs.readFileSync(path.join(componentsDir, file), 'utf8');
            const placeholder = `{{LAYOUT:${componentName}}}`;
            template = template.replace(placeholder, componentContent);
        }
    });
    
    // Read page content (required)
    const contentPath = path.join(pageFolder, 'content.html');
    const pageContent = fs.readFileSync(contentPath, 'utf8');
    template = template.replace('{{PAGE_CONTENT}}', pageContent);
    
    // Read page head (optional)
    const headPath = path.join(pageFolder, 'head.html');
    let pageHead = '';
    if (fs.existsSync(headPath)) {
        pageHead = fs.readFileSync(headPath, 'utf8');
        console.log(`  ✓ Added custom head content`);
    }
    template = template.replace('{{PAGE_HEAD}}', pageHead);
    
    // Read page end (optional)
    const endPath = path.join(pageFolder, 'end.html');
    let pageEnd = '';
    if (fs.existsSync(endPath)) {
        pageEnd = fs.readFileSync(endPath, 'utf8');
        console.log(`  ✓ Added custom end content`);
    }
    template = template.replace('{{PAGE_END}}', pageEnd);
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write the final file
    fs.writeFileSync(outputPath, template);
    console.log(`✓ Generated: ${outputPath}`);
}

function validateCosmosCompatibility(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const requiredElements = [
        '<cosmos-layout-header>',
        '</cosmos-layout-header>',
        '<cosmos-layout-footer>',
        '</cosmos-layout-footer>',
        '<!-- PAGE-SPECIFIC HEAD CONTENT WILL BE INJECTED BY COSMOS HERE -->'
    ];
    
    const missingElements = requiredElements.filter(element => !content.includes(element));
    
    if (missingElements.length > 0) {
        console.warn(`⚠️  Warning: ${filePath} is missing required Cosmos elements:`);
        missingElements.forEach(element => console.warn(`   - ${element}`));
        return false;
    }
    
    console.log(`✓ Cosmos compatibility validated: ${filePath}`);
    return true;
}

function buildLayout(layoutName) {
    const layoutPath = '.'; // Current directory since script is in the layout folder
    const sourcePath = path.join(layoutPath, '_source');
    
    // Check if _source directory exists
    if (!fs.existsSync(sourcePath)) {
        console.log(`Skipping ${layoutName} - no _source directory found`);
        return;
    }
    
    console.log(`\n🔨 Building layout: ${layoutName}`);
    
    // Clean output directory - get all existing HTML files and remove them
    const existingFiles = fs.readdirSync(layoutPath).filter(file => 
        file.endsWith('.html') && 
        !file.startsWith('_') && 
        file !== 'ckeditor-content.css'
    );
    
    existingFiles.forEach(file => {
        const filePath = path.join(layoutPath, file);
        fs.unlinkSync(filePath);
        console.log(`🗑️  Cleaned: ${file}`);
    });
    
    // Build all content folders
    const contentDir = path.join(sourcePath, 'content');
    if (fs.existsSync(contentDir)) {
        const contentFolders = fs.readdirSync(contentDir).filter(item => {
            return fs.statSync(path.join(contentDir, item)).isDirectory();
        });
        
        contentFolders.forEach(folderName => {
            const pageFolder = path.join(contentDir, folderName);
            const contentFile = path.join(pageFolder, 'content.html');
            
            // Check if required content.html exists
            if (fs.existsSync(contentFile)) {
                const outputFileName = `${folderName}.html`;
                const outputPath = path.join(layoutPath, outputFileName);
                
                buildTemplate(outputFileName, layoutPath, pageFolder, outputPath);
                validateCosmosCompatibility(outputPath);
            } else {
                console.warn(`⚠️  Skipping ${folderName} - no content.html found`);
            }
        });
    }
    
    console.log(`✅ Completed building ${layoutName}`);
}

// Main execution
console.log('🚀 Starting template build process...\n');

// Automatically detect the current folder name
const currentDir = process.cwd();
const layoutName = path.basename(currentDir);

console.log(`📁 Detected layout folder: ${layoutName}`);

try {
    buildLayout(layoutName);
} catch (error) {
    console.error(`❌ Error building layout:`, error.message);
}

console.log('\n🎉 Build process completed!');