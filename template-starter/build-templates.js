const fs = require('fs');
const path = require('path');

function buildTemplate(templateName, layoutPath, pageFolder, outputPath) {
    console.log(`Building ${templateName}...`);
    
    // Read the base template
    const baseTemplatePath = path.join(layoutPath, 'base-template.html');
    if (!fs.existsSync(baseTemplatePath)) {
        throw new Error(`base-template.html not found in ${layoutPath}`);
    }
    let template = fs.readFileSync(baseTemplatePath, 'utf8');
    
    // Read all layout components
    const componentsDir = path.join(layoutPath, '_source', 'layout-components');
    if (!fs.existsSync(componentsDir)) {
        throw new Error(`Layout components directory not found: ${componentsDir}`);
    }
    
    const componentFiles = fs.readdirSync(componentsDir);
    
    // Replace all component placeholders
    componentFiles.forEach(file => {
        if (file.endsWith('.html')) {
            const componentName = file.replace('.html', '');
            const componentContent = fs.readFileSync(path.join(componentsDir, file), 'utf8');
            const placeholder = `{{PARTIAL:${componentName}}}`;
            template = template.replace(placeholder, componentContent);
        }
    });
    
    // Read page content (required)
    const contentPath = path.join(pageFolder, 'content.html');
    if (!fs.existsSync(contentPath)) {
        throw new Error(`content.html not found in ${pageFolder}`);
    }
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
        '<!-- COSMOS TEMPLATE LAYOUT HEAD -->',
        '<!-- COSMOS TEMPLATE LAYOUT FOOTER -->',
        '<!-- COSMOS TEMPLATE CONTENT -->'
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

function buildLayout() {
    const layoutPath = '.'; // Current directory since script is in the layout folder
    const sourcePath = path.join(layoutPath, '_source');
    const templateName = path.basename(process.cwd()); // Get folder name
    
    // Check if _source directory exists
    if (!fs.existsSync(sourcePath)) {
        console.log(` Error: _source directory not found. Please create the _source directory with layout-components and content folders.`);
        return;
    }
    
    console.log(`\n Building template: ${templateName}`);
    
    // Clean output directory - get all existing HTML files and remove them
    const existingFiles = fs.readdirSync(layoutPath).filter(file => 
        file.endsWith('.html') && 
        !file.startsWith('_') && 
        file !== 'base-template.html'
    );
    
    existingFiles.forEach(file => {
        const filePath = path.join(layoutPath, file);
        fs.unlinkSync(filePath);
        console.log(`Cleaned: ${file}`);
    });
    
    // Build all content folders
    const contentDir = path.join(sourcePath, 'content');
    if (!fs.existsSync(contentDir)) {
        console.log(`Error: content directory not found at ${contentDir}`);
        return;
    }
    
    const contentFolders = fs.readdirSync(contentDir).filter(item => {
        return fs.statSync(path.join(contentDir, item)).isDirectory();
    });
    
    if (contentFolders.length === 0) {
        console.log(`Error: No content folders found in ${contentDir}`);
        return;
    }
    
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
            console.warn(`Skipping ${folderName} - no content.html found`);
        }
    });
    
    console.log(`Completed building ${templateName}`);
}

// Main execution
console.log('Starting template build process...\n');

try {
    buildLayout();
} catch (error) {
    console.error(`Error building template:`, error.message);
    process.exit(1);
}

console.log('\nBuild process completed!');
