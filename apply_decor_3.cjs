const fs = require('fs');
let content = fs.readFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', 'utf-8');

const resultsSvg = `
          {/* Background Decor - Normal Distribution */}
          <svg className="absolute top-0 left-0 w-[250px] h-[250px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="20" y1="150" x2="180" y2="150" />
            <path d="M 20 150 C 60 150, 80 50, 100 50 C 120 50, 140 150, 180 150" />
            <line x1="100" y1="50" x2="100" y2="150" strokeDasharray="4 4" />
          </svg>`;

const methodSvg = `
          {/* Background Decor - Circuit */}
          <svg className="absolute top-0 right-0 w-[250px] h-[250px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="50" y1="150" x2="150" y2="150" />
            <line x1="50" y1="150" x2="50" y2="50" />
            <line x1="150" y1="150" x2="150" y2="50" />
            <line x1="50" y1="50" x2="80" y2="50" />
            <polyline points="80,50 85,40 95,60 105,40 115,60 120,50" />
            <line x1="120" y1="50" x2="150" y2="50" />
            <line x1="90" y1="140" x2="90" y2="160" />
            <line x1="110" y1="130" x2="110" y2="170" />
          </svg>`;

if (!content.includes('Background Decor - Normal Distribution')) {
  content = content.replace(
    /<span className="text-xs uppercase tracking-widest text-secondary">Results<\/span>/,
    `${resultsSvg}\n          <span className="text-xs uppercase tracking-widest text-secondary">Results</span>`
  );
}

if (!content.includes('Background Decor - Circuit')) {
  content = content.replace(
    /className="text-center mb-16"/,
    `className="text-center mb-16 relative"`
  );
  content = content.replace(
    /<span className="section-label">NST Method<\/span>/,
    `${methodSvg}\n          <span className="section-label">NST Method</span>`
  );
}

fs.writeFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', content);
