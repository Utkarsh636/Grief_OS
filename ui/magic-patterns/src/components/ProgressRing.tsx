import React from 'react';
import { motion } from 'framer-motion';

interface ProgressRingProps {
  value: number;
  size?: number;
  label?: string;
}

export function ProgressRing({ value, size = 84, label }: ProgressRingProps) {
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" role="img" aria-label={`${value}% complete`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E6E0D6"
          strokeWidth={stroke} />
        
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#4F6F5E"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - value / 100 * circumference }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
        
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-lg text-ink">{value}%</span>
        {label ? <span className="text-[10px] uppercase tracking-wide text-muted">{label}</span> : null}
      </div>
    </div>);

}