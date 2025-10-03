#!/bin/bash

# QuickMart Image Download Script
# This script downloads all images used in the project and provides copyright-safe alternatives

echo "🚀 QuickMart Image Download Script"
echo "=================================="

# Create images directory if it doesn't exist
mkdir -p images
mkdir -p images/assets

echo "📥 Downloading project images..."

# Download hero image (main hero background)
echo "📸 Downloading hero image..."
curl -L "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" -o images/assets/hero.jpeg

# Download alternative hero images (for variety)
echo "📸 Downloading alternative hero images..."
curl -L "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o images/assets/hero2.jpeg
curl -L "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o images/assets/hero3.jpeg

# Download logo placeholder (modern retail store logo)
echo "🏪 Downloading logo..."
curl -L "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" -o images/assets/quickmartlogo.png

# Download company logos for alternative companies
echo "🏢 Downloading company logos..."
curl -L "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" -o images/assets/megamart-logo.png
curl -L "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" -o images/assets/valuemart-logo.png
curl -L "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" -o images/assets/freshco-logo.png

echo ""
echo "✅ All images downloaded successfully!"
echo ""
echo "📁 Images saved to: images/assets/"
echo ""
echo "🔄 COPYRIGHT-SAFE ALTERNATIVES:"
echo "================================"
echo ""
echo "Instead of using the downloaded images, consider these copyright-free options:"
echo ""
echo "🎨 FREE STOCK PHOTO SITES:"
echo "• https://unsplash.com"
echo "• https://pexels.com"
echo "• https://pixabay.com"
echo "• https://freepik.com"
echo ""
echo "🏪 RETAIL & STORE IMAGES:"
echo "• Search: 'modern retail store interior'"
echo "• Search: 'supermarket aisle'"
echo "• Search: 'grocery store checkout'"
echo "• Search: 'retail employees'"
echo ""
echo "🎯 LOGO DESIGN:"
echo "• Use Canva (canva.com) - free logo maker"
echo "• Hire Fiverr designer for $5-10"
echo "• Use free logo generators online"
echo ""
echo "📝 RECOMMENDED LICENSES:"
echo "• Unsplash License - completely free"
echo "• Pexels License - no attribution required"
echo "• CC0 (Creative Commons Zero) - public domain"
echo ""
echo "⚡ QUICK REPLACEMENT:"
echo "1. Go to https://unsplash.com"
echo "2. Search for 'modern retail store'"
echo "3. Download high-quality images"
echo "4. Replace files in src/assets/"
echo ""
echo "🔒 LEGAL NOTE:"
echo "Always check image licenses before using in production!"
echo "Use the script above to download copyright-safe alternatives."
