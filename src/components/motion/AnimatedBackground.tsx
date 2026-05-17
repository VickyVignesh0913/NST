import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

// Floating word particles - simulates words floating in speech
function FloatingWords() {
  const words = ['Hello', 'World', 'Learn', 'Speak', 'English', 'Boss', 'Master', 'Voice', 'Fluency', 'Success'];
  const [positions, setPositions] = useState<Array<{ x: number; y: number; word: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random positions for words
    const newPositions = words.map((word, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      word,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4
    }));
    setPositions(newPositions);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute font-mono text-sm text-[#e8a445]/40 whitespace-nowrap font-bold"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            animation: `floatWord ${pos.duration}s linear infinite`,
            animationDelay: `${pos.delay}s`
          }}
        >
          {pos.word}
        </div>
      ))}
      <style>{`
        @keyframes floatWord {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100px) rotate(-5deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// Sound wave circles emanating from center
function SoundWaves({ intensity = 'medium' }: { intensity?: 'subtle' | 'medium' | 'bold' }) {
  const count = intensity === 'subtle' ? 3 : intensity === 'medium' ? 5 : 8;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[#e8a445]/30"
          style={{
            width: '80px',
            height: '80px',
            animation: `soundWaveExpand ${4 + i * 0.5}s ease-out infinite`,
            animationDelay: `${i * 0.8}s`
          }}
        />
      ))}
      <style>{`
        @keyframes soundWaveExpand {
          0% {
            transform: scale(0.2);
            opacity: 0.6;
          }
          100% {
            transform: scale(8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// Dot grid that subtly pulses - represents phonetic dots
function PhoneticGrid() {
  const gridSize = 12;

  return (
    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
      {Array.from({ length: gridSize * gridSize }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center"
        >
          <div
            className="w-2 h-2 rounded-full bg-[#e8a445]/50"
            style={{
              animation: `gridPulse ${1.5 + Math.random() * 1.5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}

export default function AnimatedBackground({ children, className = '' }: AnimatedBackgroundProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] ${className}`}>
      <FloatingWords />
      <SoundWaves intensity="subtle" />
      <PhoneticGrid />
      {children}
    </div>
  );
}