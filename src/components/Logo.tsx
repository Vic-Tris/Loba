import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const navyColor = variant === 'dark' ? '#162235' : '#ffffff';
  const blueColor = '#337ab7';
  const accentColor = variant === 'dark' ? '#162235' : '#cbd5e1';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <div className="flex items-center justify-center">
        {/* SVG Graphic Portion of LOBA Logo */}
        <svg
          viewBox="0 12 280 80"
          className="h-7 md:h-8 w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* "L" Letter */}
          <text
            x="20"
            y="72"
            fontFamily="Poppins, sans-serif"
            fontWeight="900"
            fontSize="54"
            fill={navyColor}
            letterSpacing="-0.02em"
          >
            L
          </text>

          {/* "O" - The Scholarly Globe & Graduation Cap Emblem */}
          <g>
            {/* The Main Round Globe/Circle in Royal Blue */}
            <circle
              cx="92"
              cy="52"
              r="24"
              fill={blueColor}
            />
            {/* Inner White Ring border */}
            <circle
              cx="92"
              cy="52"
              r="22.5"
              stroke="#ffffff"
              strokeWidth="2"
              fill="transparent"
            />

            {/* The Inclined White Fountain Pen Inside */}
            <path
              d="M104 36 L108 40 L88 64 L80 64 L80 56 L104 36 Z"
              fill="#ffffff"
            />
            {/* Pen tip split line */}
            <line
              x1="81.5"
              y1="62.5"
              x2="85"
              y2="59"
              stroke={blueColor}
              strokeWidth="1.5"
            />

            {/* Graduation Cap (Mortarboard) - resting on top of the circle */}
            <path
              d="M62 38 L92 21 L122 38 L92 48 L62 38 Z"
              fill={navyColor}
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            {/* Cap Under-Cap shadow/ring */}
            <path
              d="M78 39 C78 45, 106 45, 106 39"
              stroke={navyColor}
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* White Tassel string on the Left */}
            <path
              d="M92 25 L72 32 L72 48"
              stroke="#ffffff"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* White Tassel pendant brush */}
            <ellipse
              cx="72"
              cy="49"
              rx="2.5"
              ry="3.5"
              fill="#ffffff"
            />

            {/* Diamond tassel hanging below the O-globe */}
            <path
              d="M92 76 L95 80 L92 84 L89 80 Z"
              fill={blueColor}
            />
            {/* Tassel line connecting circle to diamond */}
            <line
              x1="92"
              y1="72"
              x2="92"
              y2="76"
              stroke={navyColor}
              strokeWidth="2"
            />
          </g>

          {/* "BA" Letters */}
          <text
            x="126"
            y="72"
            fontFamily="Poppins, sans-serif"
            fontWeight="900"
            fontSize="54"
            fill={navyColor}
            letterSpacing="-0.02em"
          >
            BA
          </text>

          {/* Subtitle "Scholarly Consulting" below BA */}
          <text
            x="110"
            y="90"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="11.5"
            fill={accentColor}
            letterSpacing="0.04em"
          >
            Scholarly Consulting
          </text>
        </svg>
      </div>
    </div>
  );
}
