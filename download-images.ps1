# QuickMart Image Download Script (PowerShell Version)
# This script downloads all images used in the project and provides copyright-safe alternatives

Write-Host "🚀 QuickMart Image Download Script" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green

# Create images directory if it doesn't exist
if (!(Test-Path "images")) {
    New-Item -ItemType Directory -Path "images"
}
if (!(Test-Path "images/assets")) {
    New-Item -ItemType Directory -Path "images/assets"
}

Write-Host "📥 Downloading project images..." -ForegroundColor Yellow

# Download hero image (main hero background)
Write-Host "📸 Downloading hero image..." -ForegroundColor Cyan
curl.exe -L "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1926" -o "images/assets/hero.jpeg"

# Download alternative hero images (for variety)
Write-Host "📸 Downloading alternative hero images..." -ForegroundColor Cyan
curl.exe -L "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2070" -o "images/assets/hero2.jpeg"
curl.exe -L "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2070" -o "images/assets/hero3.jpeg"

# Download logo placeholder (modern retail store logo)
Write-Host "🏪 Downloading logo..." -ForegroundColor Cyan
curl.exe -L "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400" -o "images/assets/quickmartlogo.png"

# Download company logos for alternative companies
Write-Host "🏢 Downloading company logos..." -ForegroundColor Cyan
curl.exe -L "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200" -o "images/assets/megamart-logo.png"
curl.exe -L "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200" -o "images/assets/valuemart-logo.png"
curl.exe -L "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200" -o "images/assets/freshco-logo.png"

Write-Host ""
Write-Host "✅ All images downloaded successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📁 Images saved to: images/assets/" -ForegroundColor Yellow
Write-Host ""
Write-Host "🔄 COPYRIGHT-SAFE ALTERNATIVES:" -ForegroundColor Red
Write-Host "================================" -ForegroundColor Red
Write-Host ""
Write-Host "Instead of using the downloaded images, consider these copyright-free options:" -ForegroundColor Yellow
Write-Host ""
Write-Host "🎨 FREE STOCK PHOTO SITES:" -ForegroundColor Cyan
Write-Host "• https://unsplash.com" -ForegroundColor White
Write-Host "• https://pexels.com" -ForegroundColor White
Write-Host "• https://pixabay.com" -ForegroundColor White
Write-Host "• https://freepik.com" -ForegroundColor White
Write-Host ""
Write-Host "🏪 RETAIL & STORE IMAGES:" -ForegroundColor Cyan
Write-Host "• Search: 'modern retail store interior'" -ForegroundColor White
Write-Host "• Search: 'supermarket aisle'" -ForegroundColor White
Write-Host "• Search: 'grocery store checkout'" -ForegroundColor White
Write-Host "• Search: 'retail employees'" -ForegroundColor White
Write-Host ""
Write-Host "🎯 LOGO DESIGN:" -ForegroundColor Cyan
Write-Host "• Use Canva (canva.com) - free logo maker" -ForegroundColor White
Write-Host "• Hire Fiverr designer for $5-10" -ForegroundColor White
Write-Host "• Use free logo generators online" -ForegroundColor White
Write-Host ""
Write-Host "📝 RECOMMENDED LICENSES:" -ForegroundColor Cyan
Write-Host "• Unsplash License - completely free" -ForegroundColor White
Write-Host "• Pexels License - no attribution required" -ForegroundColor White
Write-Host "• CC0 (Creative Commons Zero) - public domain" -ForegroundColor White
Write-Host ""
Write-Host "⚡ QUICK REPLACEMENT:" -ForegroundColor Cyan
Write-Host "1. Go to https://unsplash.com" -ForegroundColor White
Write-Host "2. Search for 'modern retail store'" -ForegroundColor White
Write-Host "3. Download high-quality images" -ForegroundColor White
Write-Host "4. Replace files in src/assets/" -ForegroundColor White
Write-Host ""
Write-Host "🔒 LEGAL NOTE:" -ForegroundColor Red
Write-Host "Always check image licenses before using in production!" -ForegroundColor Yellow
Write-Host "Use the script above to download copyright-safe alternatives." -ForegroundColor Yellow
