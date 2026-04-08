const fs = require('fs');
const path = require('path');

const targetFile = 'internship_letter.html';
const logoFile = 'vectorised-image.png';
const sigFile = 'founder_ananthan.jpg';

function toBase64(filePath, mimeType) {
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        return null;
    }
    const buffer = fs.readFileSync(filePath);
    return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

let html = fs.readFileSync(targetFile, 'utf8');

const logoDataUrl = toBase64(logoFile, 'image/png');
const sigDataUrl = toBase64(sigFile, 'image/jpeg');

if (logoDataUrl) {
    console.log('Injecting logo...');
    html = html.replace(/id="logo-image" (class="[^"]*") alt="FSPW Logo" src="[^"]*"/, `id="logo-image" $1 alt="FSPW Logo" src="${logoDataUrl}"`);
    // Also handle the previous version if it didn't have src yet
    html = html.replace(/src="vectorised-image.png" id="logo-image"/, `src="${logoDataUrl}" id="logo-image"`);
}

if (sigDataUrl) {
    console.log('Injecting signature...');
    html = html.replace(/src="founder_ananthan.jpg" id="sig-image"/, `src="${sigDataUrl}" id="sig-image"`);
}

fs.writeFileSync(targetFile, html);
console.log('Injection complete.');
