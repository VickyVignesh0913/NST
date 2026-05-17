import { useEffect, useRef } from 'react';

interface SpeechPulseProps {
  intensity?: 'subtle' | 'medium' | 'bold';
  color?: string;
  className?: string;
}

export default function SpeechPulse({
  intensity = 'medium',
  color = '#e8a445',
  className = ''
}: SpeechPulseProps) {
  const rings = intensity === 'subtle' ? 3 : intensity === 'medium' ? 5 : 7;

  return (
    <div className={`relative ${className}`}>
      {/* Center point - like a sound source */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      />

      {/* Expanding rings */}
      {Array.from({ length: rings }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{
            width: '12px',
            height: '12px',
            borderColor: color,
            opacity: 0,
            animation: `speechPulse ${2 + i * 0.5}s ease-out infinite`,
            animationDelay: `${i * 0.4}s`
          }}
        />
      ))}

      <style>{`
        @keyframes speechPulse {
          0% {
            width: 12px;
            height: 12px;
            opacity: 0.8;
          }
          100% {
            width: 120px;
            height: 120px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// VoiceWave - horizontal audio waveform visualization
interface VoiceWaveProps {
  bars?: number;
  className?: string;
}

export function VoiceWave({ bars = 12, className = '' }: VoiceWaveProps) {
  return (
    <div className={`flex items-end gap-1 h-8 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-[#e8a445]"
          style={{
            height: '20%',
            animation: `voiceWave ${0.8 + Math.random() * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}
      <style>{`
        @keyframes voiceWave {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
}

// TypewriterCursor - blinking cursor for typing effect
export function TypewriterCursor({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-block w-[0.6em] h-[1.1em] bg-[#e8a445] ml-[2px] animate-[typewriterBlink_0.7s_step-end_infinite] ${className}`}
      style={{
        verticalAlign: 'text-bottom'
      }}
    >
      <style>{`
        @keyframes typewriterBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}