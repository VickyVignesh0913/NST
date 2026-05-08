const fs = require('fs');
let content = fs.readFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', 'utf-8');

// Scrub out all SVGs that have "Background Decor" comments
content = content.replace(/\{\/\* Background Decor[^\}]+\*\/\}[\s\S]*?<\/svg>/g, '');

fs.writeFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', content);
console.log('Cleaned');
