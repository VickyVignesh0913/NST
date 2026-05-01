const fs = require('fs');

let content = fs.readFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', 'utf-8');

const svgs = {
  heroLeft: `
            {/* Background Decor - Projectile Motion */}
            <svg className="absolute -left-10 top-20 w-[350px] h-[350px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 20 180 Q 100 20, 180 180" strokeDasharray="4 4" />
              <line x1="20" y1="180" x2="20" y2="20" />
              <line x1="20" y1="180" x2="180" y2="180" />
              <circle cx="20" cy="180" r="4" fill="currentColor" stroke="none" />
              <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" />
              <circle cx="180" cy="180" r="4" fill="currentColor" stroke="none" />
            </svg>`,
  heroRight: `
            {/* Background Decor - Wave Ray Diagram */}
            <svg className="absolute -right-20 -top-20 w-[450px] h-[450px] text-[#D8D2C6] pointer-events-none z-[-1] transform -rotate-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 100 Q 50 0, 100 100 T 200 100" />
              <line x1="0" y1="100" x2="200" y2="100" strokeDasharray="4 4" />
            </svg>`,
  youtubeHeader: `
          {/* Background Decor - Geometric Ray */}
          <svg className="absolute top-0 right-0 w-[200px] h-[200px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="100" cy="100" r="60" strokeDasharray="2 4" />
            <line x1="40" y1="100" x2="160" y2="100" />
            <line x1="100" y1="40" x2="100" y2="160" />
            <line x1="57" y1="57" x2="143" y2="143" />
            <path d="M 100 100 L 150 50" />
            <text x="155" y="45" fontSize="12" fontFamily="sans-serif" fill="currentColor" stroke="none">v</text>
          </svg>`,
  insideLeft: `
            {/* Background Decor - Physics Formula */}
            <svg className="absolute -left-10 top-0 w-[300px] h-[150px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <text x="10" y="50" fontSize="32" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">F = G</text>
              <text x="95" y="40" fontSize="20" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">m₁m₂</text>
              <line x1="85" y1="48" x2="145" y2="48" />
              <text x="105" y="70" fontSize="20" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">r²</text>
            </svg>`,
  insideRight: `
            {/* Background Decor - Bohr Atom */}
            <svg className="absolute -right-20 -bottom-20 w-[400px] h-[400px] text-[#D8D2C6] pointer-events-none z-[-1] transform rotate-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
              <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(30 100 100)" />
              <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(90 100 100)" />
              <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(150 100 100)" />
              <circle cx="100" cy="100" r="8" fill="currentColor" stroke="none" />
            </svg>`,
  coursesHeader: `
          {/* Background Decor - Magnetic Field */}
          <svg className="absolute right-0 top-0 w-[200px] h-[200px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 100 60 C 140 20, 180 60, 100 180" />
            <path d="M 100 60 C 60 20, 20 60, 100 180" />
            <line x1="100" y1="40" x2="100" y2="180" strokeDasharray="4 4" />
          </svg>`,
  aboutLeft: `
            {/* Background Decor - Heartbeat Motif */}
            <svg className="absolute -left-10 -bottom-10 w-[300px] h-[150px] text-[#D8D2C6] pointer-events-none z-[-1]" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
              <path d="M0 50 L 50 50 L 60 30 L 70 80 L 85 20 L 95 60 L 105 50 L 200 50" />
            </svg>`
};

// 1. Hero Left
content = content.replace(
  /\{\/\* Left Content \*\/}[ \t]*\n[ \t]*<div>/,
  `{/* Left Content */}\n          <div className="relative">${svgs.heroLeft}`
);

// 2. Hero Right
content = content.replace(
  /\{\/\* Right Content - Course Card Preview \*\/}[ \t]*\n[ \t]*<motion\.div\n[ \t]*className="animate-fade-rise-delay relative hidden lg:block"\n[ \t]*initial=\{\{ opacity: 0, x: 30 \}\}\n[ \t]*animate=\{\{ opacity: 1, x: 0 \}\}\n[ \t]*transition=\{\{ duration: 0\.6, delay: 0\.3 \}\}\n[ \t]*>/,
  `{/* Right Content - Course Card Preview */}\n          <motion.div\n            className="animate-fade-rise-delay relative hidden lg:block"\n            initial={{ opacity: 0, x: 30 }}\n            animate={{ opacity: 1, x: 0 }}\n            transition={{ duration: 0.6, delay: 0.3 }}\n          >${svgs.heroRight}`
);

// 3. YouTube Header
content = content.replace(
  /className="text-center mb-10"/,
  `className="text-center mb-10 relative"`
);
// Make sure not to double replace. This matches the exact block.
const ytRegex = /viewport=\{\{ once: true, margin: "-100px" \}\}\n[ \t]*transition=\{\{ duration: 0\.6 \}\}\n[ \t]*>/g;
let ytMatchCount = 0;
content = content.replace(ytRegex, (match) => {
  ytMatchCount++;
  if (ytMatchCount === 1) { // The first one is the youtube header
    return `viewport={{ once: true, margin: "-100px" }}\n          transition={{ duration: 0.6 }}\n        >${svgs.youtubeHeader}`;
  }
  return match;
});

// 4. Inside Class Left
content = content.replace(
  /\{\/\* Left Content \*\/}[ \t]*\n[ \t]*<motion\.div\n[ \t]*initial=\{\{ opacity: 0, x: -30 \}\}/,
  `{/* Left Content */}\n          <motion.div\n            className="relative"\n            initial={{ opacity: 0, x: -30 }}`
);

const insideLeftRegex = /viewport=\{\{ once: true, margin: "-100px" \}\}\n[ \t]*transition=\{\{ duration: 0\.6 \}\}\n[ \t]*>/g;
let insideMatchCount = 0;
content = content.replace(insideLeftRegex, (match) => {
  insideMatchCount++;
  // We need to match the specific transition of inside left.
  // We'll just replace it differently.
  return match;
});
// Safer replace:
content = content.replace(
  /className="relative"\n[ \t]*initial=\{\{ opacity: 0, x: -30 \}\}\n[ \t]*whileInView=\{\{ opacity: 1, x: 0 \}\}\n[ \t]*viewport=\{\{ once: true, margin: "-100px" \}\}\n[ \t]*transition=\{\{ duration: 0\.6 \}\}\n[ \t]*>/,
  `className="relative"\n            initial={{ opacity: 0, x: -30 }}\n            whileInView={{ opacity: 1, x: 0 }}\n            viewport={{ once: true, margin: "-100px" }}\n            transition={{ duration: 0.6 }}\n          >${svgs.insideLeft}`
);


// 5. Inside Class Right
content = content.replace(
  /\{\/\* Right Content - Video Player Mock \*\/}[ \t]*\n[ \t]*<motion\.div\n[ \t]*initial=\{\{ opacity: 0, x: 30 \}\}/,
  `{/* Right Content - Video Player Mock */}\n          <motion.div\n            className="relative"\n            initial={{ opacity: 0, x: 30 }}`
);
content = content.replace(
  /className="relative"\n[ \t]*initial=\{\{ opacity: 0, x: 30 \}\}\n[ \t]*whileInView=\{\{ opacity: 1, x: 0 \}\}\n[ \t]*viewport=\{\{ once: true, margin: "-100px" \}\}\n[ \t]*transition=\{\{ duration: 0\.6, delay: 0\.2 \}\}\n[ \t]*>/,
  `className="relative"\n            initial={{ opacity: 0, x: 30 }}\n            whileInView={{ opacity: 1, x: 0 }}\n            viewport={{ once: true, margin: "-100px" }}\n            transition={{ duration: 0.6, delay: 0.2 }}\n          >${svgs.insideRight}`
);

// 6. Courses Header
content = content.replace(
  /className="max-w-2xl mb-16"/,
  `className="max-w-2xl mb-16 relative"`
);
content = content.replace(
  /<span className="text-xs uppercase tracking-widest text-secondary">Programs<\/span>/,
  `${svgs.coursesHeader}\n          <span className="text-xs uppercase tracking-widest text-secondary">Programs</span>`
);

// 7. About Left
content = content.replace(
  /\{\/\* Left - Image Card \*\/}[ \t]*\n[ \t]*<motion\.div\n[ \t]*className="relative"\n[ \t]*initial=\{\{ opacity: 0, y: 20 \}\}\n[ \t]*whileInView=\{\{ opacity: 1, y: 0 \}\}\n[ \t]*viewport=\{\{ once: true, margin: "-100px" \}\}\n[ \t]*transition=\{\{ duration: 0\.6 \}\}\n[ \t]*>/,
  `{/* Left - Image Card */}\n          <motion.div\n            className="relative"\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true, margin: "-100px" }}\n            transition={{ duration: 0.6 }}\n          >${svgs.aboutLeft}`
);

fs.writeFileSync('c:/Users/vjkin/Documents/NST/src/components/LandingPage.tsx', content);
console.log('Success');
