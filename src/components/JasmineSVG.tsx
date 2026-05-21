import React from "react";

// Standard Jasmine Flower Sprig - 5 small oval petals around center
export const JasmineSprig: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 48
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      referrerPolicy="no-referrer"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Branch stem */}
        <path d="M50 85 C50 65, 45 45, 30 25" />
        <path d="M46 59 C54 45, 65 40, 75 35" />
        <path d="M42 40 C35 32, 25 30, 15 28" />

        {/* Central Flower */}
        <g transform="translate(30, 25)">
          {/* Petals */}
          <ellipse cx="0" cy="-12" rx="6" ry="12" fill="var(--color-jasmine-pale)" className="text-jasmine-pale" />
          <ellipse cx="12" cy="0" rx="12" ry="6" fill="var(--color-jasmine-pale)" className="text-jasmine-pale" />
          <ellipse cx="0" cy="12" rx="6" ry="12" fill="var(--color-jasmine-pale)" className="text-jasmine-pale" />
          <ellipse cx="-12" cy="0" rx="12" ry="6" fill="var(--color-jasmine-pale)" className="text-jasmine-pale" />
          {/* Silted fifth petal */}
          <ellipse cx="-8" cy="-8" rx="7" ry="10" transform="rotate(45 -8 -8)" fill="var(--color-jasmine-pale)" className="text-jasmine-pale" />
          {/* Flower center */}
          <circle cx="0" cy="0" r="4" fill="var(--color-gold)" className="text-gold" />
        </g>

        {/* Side Flower right */}
        <g transform="translate(75, 35) scale(0.8)">
          <ellipse cx="0" cy="-12" rx="6" ry="12" fill="var(--color-jasmine-pale)" />
          <ellipse cx="12" cy="0" rx="12" ry="6" fill="var(--color-jasmine-pale)" />
          <ellipse cx="0" cy="12" rx="6" ry="12" fill="var(--color-jasmine-pale)" />
          <ellipse cx="-12" cy="0" rx="12" ry="6" fill="var(--color-jasmine-pale)" />
          <ellipse cx="8" cy="-8" rx="7" ry="10" transform="rotate(-45 8 -8)" fill="var(--color-jasmine-pale)" />
          <circle cx="0" cy="0" r="4" fill="var(--color-gold)" />
        </g>

        {/* Side Buds */}
        <path d="M15 28 C10 20, 20 15, 15 28 Z" fill="var(--color-jasmine-pale)" />
      </g>
    </svg>
  );
};

// Simple Wheat Stalk for the menu section
export const WheatStalk: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 36
}) => {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 50 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      referrerPolicy="no-referrer"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {/* Main stem */}
        <path d="M25 95 V25" />
        {/* Grains */}
        <path d="M25 25 C20 18, 22 10, 25 5" fill="var(--color-gold-light)" />
        <path d="M25 25 C30 18, 28 10, 25 5" fill="var(--color-gold-light)" />
        
        <path d="M25 40 C17 35, 15 25, 23 20" fill="var(--color-gold)" />
        <path d="M25 40 C33 35, 35 25, 27 20" fill="var(--color-gold)" />

        <path d="M25 55 C17 50, 15 40, 23 35" fill="var(--color-gold)" />
        <path d="M25 55 C33 50, 35 40, 27 35" fill="var(--color-gold)" />

        <path d="M25 70 C17 65, 15 55, 23 50" fill="var(--color-gold-light)" />
        <path d="M25 70 C33 65, 35 55, 27 50" fill="var(--color-gold-light)" />
      </g>
    </svg>
  );
};

// Hand-made Pierogi shape: simple half-moon shape, filled with fork-press marks along the edge
export const PierogiArt: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 64
}) => {
  return (
    <svg
      width={size}
      height={size / 1.6}
      viewBox="0 0 100 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      referrerPolicy="no-referrer"
    >
      {/* Outer shell shadow */}
      <path
        d="M5 50 C 5 20, 95 20, 95 50 Z"
        fill="var(--color-bg-warm)"
        stroke="var(--color-navy)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Fork-press markings along the top half-moon boundary line */}
      <g stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round">
        {/* Top curved edge fold details */}
        <path d="M5 50 C5 48, 8 46, 12 43 C 16 41, 20 42, 24 40 C 30 38, 38 42, 45 39 C 52 38, 58 40, 65 39 C 72 39, 78 41, 84 43 C 90 45, 93 48, 95 50" fill="none" opacity="0.4" />
        
        {/* Tiny fork print lines */}
        <path d="M12 43 L10 37" />
        <path d="M20 40 L18 34" />
        <path d="M28 38 L27 31" />
        <path d="M37 38 L37 31" />
        <path d="M46 39 L47 32" />
        <path d="M55 39 L57 32" />
        <path d="M64 39 L66 32" />
        <path d="M73 40 L76 34" />
        <path d="M82 42 L85 36" />
        <path d="M90 46 L94 40" />

        {/* Flour dust visual lines */}
        <path d="M30 46 C35 48, 45 44, 52 46" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        <path d="M42 48 C48 50, 56 47, 68 49" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      </g>
    </svg>
  );
};

// Steam wisps for food heat representation
export const SteamWisps: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      width="24"
      height="32"
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} animate-steam`}
      referrerPolicy="no-referrer"
    >
      <path
        d="M6 28 C 3 20, 11 12, 5 4"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M16 26 C 12 18, 20 12, 13 4"
        stroke="var(--color-gold-light)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
};

// Leaf Pair
export const LeafPair: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 24
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      referrerPolicy="no-referrer"
    >
      <g stroke="var(--color-green-herb)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Stem */}
        <path d="M2 22 L8 16" />
        {/* Left leaf */}
        <path d="M8 16 C 6 12, 4 10, 6 6 C 10 4, 12 6, 14 10 C 12 14, 10 16, 8 16 Z" fill="rgba(74, 106, 66, 0.1)" />
        <path d="M8 16 L11 11" />
        {/* Right leaf */}
        <path d="M8 16 C 12 14, 14 12, 16 14 C 18 18, 16 20, 12 18 C 10 16, 8 16, 8 16 Z" fill="rgba(74, 106, 66, 0.08)" />
        <path d="M8 16 L13 16" />
      </g>
    </svg>
  );
};

// Wave Divider Line
export const WaveDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      width="100%"
      height="12"
      viewBox="0 0 1200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      referrerPolicy="no-referrer"
    >
      <path
        d="M0 6 Q 75 12, 150 6 T 300 6 T 450 6 T 600 6 T 750 6 T 900 6 T 1050 6 T 1200 6"
        stroke="var(--color-border)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
};
