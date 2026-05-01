const fs = require('fs');
let content = fs.readFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', 'utf-8');

const resultsSvg = `
          {/* Background Decor - Normal Distribution */}
          <svg className="absolute top-0 left-0 w-[250px] h-[250px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="20" y1="150" x2="180" y2="150" />
            <path d="M 20 150 C 60 150, 80 50, 100 50 C 120 50, 140 150, 180 150" />
            <line x1="100" y1="50" x2="100" y2="150" strokeDasharray="4 4" />
          </svg>`;

const aboutRightSvg = `
            {/* Background Decor - Stethoscope Motif */}
            <svg className="absolute -right-20 -bottom-10 w-[250px] h-[250px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 100 20 C 140 20, 160 50, 160 100 C 160 150, 100 180, 100 180 C 100 180, 40 150, 40 100 C 40 50, 60 20, 100 20" />
              <circle cx="100" cy="180" r="10" />
            </svg>`;

// Apply Results SVG
if (!content.includes('Background Decor - Normal Distribution')) {
  content = content.replace(
    /className="text-center mb-16"/,
    `className="text-center mb-16 relative"`
  );
  content = content.replace(
    /<span className="section-label">Proven Results<\/span>/,
    `${resultsSvg}\n          <span className="section-label">Proven Results</span>`
  );
}

// Apply About Right SVG
if (!content.includes('Background Decor - Stethoscope Motif')) {
  // It's after Left - Image Card
  content = content.replace(
    /\{\/\* Right - Content \*\/}[ \t]*\n[ \t]*<motion\.div\n[ \t]*initial=\{\{ opacity: 0, y: 20 \}\}/,
    `{/* Right - Content */}\n          <motion.div\n            className="relative"\n            initial={{ opacity: 0, y: 20 }}`
  );
  content = content.replace(
    /viewport=\{\{ once: true, margin: "-100px" \}\}\n[ \t]*transition=\{\{ duration: 0\.6, delay: 0\.2 \}\}\n[ \t]*>/,
    `viewport={{ once: true, margin: "-100px" }}\n            transition={{ duration: 0.6, delay: 0.2 }}\n          >${aboutRightSvg}`
  );
}

fs.writeFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', content);
console.log('Success applying remaining SVGs');
