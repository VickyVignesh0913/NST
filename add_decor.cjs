const fs = require('fs');

let content = fs.readFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', 'utf-8');

const svgs = {
  hero: `
      {/* Background Decor - Wave Ray Diagram */}
      <svg className="absolute top-20 right-[2%] lg:right-[5%] w-[450px] h-[450px] text-[#C0B7A5] pointer-events-none z-0 transform -rotate-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M0 100 Q 50 0, 100 100 T 200 100" />
        <line x1="0" y1="100" x2="200" y2="100" strokeDasharray="4 4" />
      </svg>
      {/* Background Decor - Projectile Motion */}
      <svg className="absolute bottom-10 left-[2%] lg:left-[5%] w-[350px] h-[350px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 20 180 Q 100 20, 180 180" strokeDasharray="4 4" />
        <line x1="20" y1="180" x2="20" y2="20" />
        <line x1="20" y1="180" x2="180" y2="180" />
        <circle cx="20" cy="180" r="4" fill="currentColor" stroke="none" />
        <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" />
        <circle cx="180" cy="180" r="4" fill="currentColor" stroke="none" />
      </svg>`,
  youtube: `
      {/* Background Decor - Geometric Ray */}
      <svg className="absolute top-20 right-[2%] lg:right-[5%] w-[400px] h-[400px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="100" cy="100" r="60" strokeDasharray="2 4" />
        <line x1="40" y1="100" x2="160" y2="100" />
        <line x1="100" y1="40" x2="100" y2="160" />
        <line x1="57" y1="57" x2="143" y2="143" />
        <path d="M 100 100 L 150 50" />
        <text x="155" y="45" fontSize="12" fontFamily="sans-serif" fill="currentColor" stroke="none">v</text>
      </svg>
      {/* Background Decor - Play Button Motif */}
      <svg className="absolute bottom-20 left-[2%] lg:left-[5%] w-[300px] h-[300px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="100" cy="100" r="80" strokeDasharray="4 8" />
        <circle cx="100" cy="100" r="60" />
        <polygon points="85,75 130,100 85,125" strokeLinejoin="round" />
      </svg>`,
  insideClass: `
      {/* Background Decor - Physics Formula */}
      <svg className="absolute top-10 left-[2%] lg:left-[5%] w-[350px] h-[175px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <text x="10" y="50" fontSize="32" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">F = G</text>
        <text x="95" y="40" fontSize="20" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">m₁m₂</text>
        <line x1="85" y1="48" x2="145" y2="48" />
        <text x="105" y="70" fontSize="20" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">r²</text>
      </svg>
      {/* Background Decor - Bohr Atom */}
      <svg className="absolute bottom-10 right-[2%] lg:right-[5%] w-[450px] h-[450px] text-[#C0B7A5] pointer-events-none z-0 transform rotate-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(30 100 100)" />
        <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(90 100 100)" />
        <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(150 100 100)" />
        <circle cx="100" cy="100" r="8" fill="currentColor" stroke="none" />
      </svg>`,
  about: `
      {/* Background Decor - Heartbeat Motif */}
      <svg className="absolute top-20 right-[2%] lg:right-[5%] w-[400px] h-[200px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M0 50 L 50 50 L 60 30 L 70 80 L 85 20 L 95 60 L 105 50 L 200 50" />
      </svg>
      {/* Background Decor - Stethoscope Motif */}
      <svg className="absolute bottom-10 left-[2%] lg:left-[5%] w-[350px] h-[350px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 100 20 C 140 20, 160 50, 160 100 C 160 150, 100 180, 100 180 C 100 180, 40 150, 40 100 C 40 50, 60 20, 100 20" />
        <circle cx="100" cy="180" r="10" />
      </svg>`,
  courses: `
      {/* Background Decor - Magnetic Field */}
      <svg className="absolute top-20 right-[2%] lg:right-[5%] w-[400px] h-[400px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 100 60 C 140 20, 180 60, 100 180" />
        <path d="M 100 60 C 60 20, 20 60, 100 180" />
        <line x1="100" y1="40" x2="100" y2="180" strokeDasharray="4 4" />
      </svg>`,
  results: `
      {/* Background Decor - Normal Distribution */}
      <svg className="absolute top-10 left-[2%] lg:left-[5%] w-[350px] h-[350px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="20" y1="150" x2="180" y2="150" />
        <path d="M 20 150 C 60 150, 80 50, 100 50 C 120 50, 140 150, 180 150" />
        <line x1="100" y1="50" x2="100" y2="150" strokeDasharray="4 4" />
      </svg>`,
  method: `
      {/* Background Decor - Circuit */}
      <svg className="absolute bottom-10 right-[2%] lg:right-[5%] w-[350px] h-[350px] text-[#C0B7A5] pointer-events-none z-0" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="50" y1="150" x2="150" y2="150" />
        <line x1="50" y1="150" x2="50" y2="50" />
        <line x1="150" y1="150" x2="150" y2="50" />
        <line x1="50" y1="50" x2="80" y2="50" />
        <polyline points="80,50 85,40 95,60 105,40 115,60 120,50" />
        <line x1="120" y1="50" x2="150" y2="50" />
        <line x1="90" y1="140" x2="90" y2="160" />
        <line x1="110" y1="130" x2="110" y2="170" />
      </svg>`
};

content = content.replace(/\{\/\* Background Decor - Wave Ray Diagram \*\/\}[\s\S]*?<\/svg>/, svgs.hero.trim());
content = content.replace(/\{\/\* Background Decor - Geometric Ray \*\/\}[\s\S]*?<\/svg>/, svgs.youtube.trim());
content = content.replace(/\{\/\* Background Decor - Physics Formula \*\/\}[\s\S]*?<\/svg>/, svgs.insideClass.trim());
content = content.replace(/\{\/\* Background Decor - Heartbeat Motif \*\/\}[\s\S]*?<\/svg>/, svgs.about.trim());

if (!content.includes('Background Decor - Magnetic Field')) {
  content = content.replace(
    /<section id="courses" className="relative py-32 overflow-hidden">\s*(?:<div className="absolute inset-0 bg-\[radial-gradient[^>]+>\s*\/>\s*)?/,
    `<section id="courses" className="relative py-32 overflow-hidden">\n      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,var(--glow-mint)_0%,transparent_50%)]" />\n${svgs.courses}`
  );
}

if (!content.includes('Background Decor - Normal Distribution')) {
  content = content.replace(
    /<section id="results" className="relative py-32 overflow-hidden">\s*(?:<div className="absolute inset-0 bg-\[radial-gradient[^>]+>\s*\/>\s*)?/,
    `<section id="results" className="relative py-32 overflow-hidden">\n      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,var(--glow-peach)_0%,transparent_50%)]" />\n${svgs.results}`
  );
}

if (!content.includes('Background Decor - Circuit')) {
  content = content.replace(
    /<section className="relative py-32 overflow-hidden">\s*<div className="absolute inset-0 bg-\[radial-gradient\(ellipse_at_20%_50%,var\(--glow-mint\)_0%,transparent_50%\)\]" \/>\s*<div className="relative z-10 max-w-7xl mx-auto px-6">\s*<div className="text-center mb-16">\s*<span className="section-label">NST Method<\/span>/,
    `<section className="relative py-32 overflow-hidden">\n      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,var(--glow-mint)_0%,transparent_50%)]" />\n${svgs.method}\n      <div className="relative z-10 max-w-7xl mx-auto px-6">\n        <div className="text-center mb-16">\n          <span className="section-label">NST Method</span>`
  );
}

fs.writeFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', content);
console.log('Success');
