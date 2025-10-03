const https = require('https');
const fs = require('fs');
const path = require('path');

// QuickMart Image Download Script (Node.js Version)
console.log('🚀 QuickMart Image Download Script');
console.log('==================================');

// Create images directory if it doesn't exist
const assetsDir = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

const imagesDir = path.join(__dirname, 'images', 'assets');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

console.log('📥 Downloading project images...');

// Download function
function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(imagesDir, filename);
        const file = fs.createWriteStream(filePath);

        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                console.log(`✅ Downloaded: ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => {}); // Delete partial file
            reject(err);
        });
    });
}

// Image download list
const images = [
    {
        url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
        filename: 'hero.jpeg'
    },
    {
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        filename: 'hero2.jpeg'
    },
    {
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        filename: 'hero3.jpeg'
    },
    {
        url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        filename: 'quickmartlogo.png'
    },
    {
        url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        filename: 'megamart-logo.png'
    },
    {
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        filename: 'valuemart-logo.png'
    },
    {
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        filename: 'freshco-logo.png'
    }
];

// Download all images
async function downloadAllImages() {
    try {
        for (const image of images) {
            await downloadImage(image.url, image.filename);
        }

        console.log('\n✅ All images downloaded successfully!');
        console.log('\n📁 Images saved to: images/assets/');
        console.log('\n🔄 COPYRIGHT-SAFE ALTERNATIVES:');
        console.log('===============================');
        console.log('\n🎨 FREE STOCK PHOTO SITES:');
        console.log('• https://unsplash.com');
        console.log('• https://pexels.com');
        console.log('• https://pixabay.com');
        console.log('• https://freepik.com');
        console.log('\n🏪 RETAIL & STORE IMAGES:');
        console.log('• Search: "modern retail store interior"');
        console.log('• Search: "supermarket aisle"');
        console.log('• Search: "grocery store checkout"');
        console.log('• Search: "retail employees"');
        console.log('\n🎯 LOGO DESIGN:');
        console.log('• Use Canva (canva.com) - free logo maker');
        console.log('• Hire Fiverr designer for $5-10');
        console.log('• Use free logo generators online');
        console.log('\n📝 RECOMMENDED LICENSES:');
        console.log('• Unsplash License - completely free');
        console.log('• Pexels License - no attribution required');
        console.log('• CC0 (Creative Commons Zero) - public domain');
        console.log('\n⚡ QUICK REPLACEMENT:');
        console.log('1. Go to https://unsplash.com');
        console.log('2. Search for "modern retail store"');
        console.log('3. Download high-quality images');
        console.log('4. Replace files in src/assets/');
        console.log('\n🔒 LEGAL NOTE:');
        console.log('Always check image licenses before using in production!');
        console.log('Use the script above to download copyright-safe alternatives.');

    } catch (error) {
        console.error('\n❌ Error downloading images:', error.message);
        process.exit(1);
    }
}

// Run the download
downloadAllImages();
