'use client';

export function WorldMapBg() {
    return (
        <svg
            viewBox="0 0 1200 600"
            className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            style={{ pointerEvents: 'none' }}
        >
            <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.4" />
                </linearGradient>
            </defs>

            {/* Ocean background */}
            <rect width="1200" height="600" fill="url(#mapGradient)" opacity="0.3" />

            {/* Continents simplified as paths */}
            {/* North America */}
            <path
                d="M 150 120 L 180 100 L 200 110 L 210 140 L 200 160 L 170 170 L 150 150 Z"
                fill="currentColor"
                opacity="0.6"
                className="text-primary"
            />

            {/* South America */}
            <path
                d="M 220 180 L 240 170 L 250 200 L 240 250 L 220 240 L 215 200 Z"
                fill="currentColor"
                opacity="0.6"
                className="text-primary"
            />

            {/* Europe */}
            <path
                d="M 420 80 L 460 70 L 480 90 L 470 130 L 440 140 L 420 120 Z"
                fill="currentColor"
                opacity="0.6"
                className="text-primary"
            />

            {/* Africa */}
            <path
                d="M 480 140 L 520 130 L 540 160 L 530 220 L 500 240 L 480 220 L 475 180 Z"
                fill="currentColor"
                opacity="0.6"
                className="text-primary"
            />

            {/* Asia */}
            <path
                d="M 550 60 L 650 50 L 700 80 L 720 140 L 680 160 L 600 150 L 550 120 Z"
                fill="currentColor"
                opacity="0.6"
                className="text-primary"
            />

            {/* Australia */}
            <path
                d="M 740 280 L 780 270 L 790 310 L 770 330 L 740 320 Z"
                fill="currentColor"
                opacity="0.6"
                className="text-primary"
            />

            {/* Antarctica (simplified) */}
            <path
                d="M 0 500 L 1200 500 L 1200 600 L 0 600 Z"
                fill="currentColor"
                opacity="0.4"
                className="text-primary"
            />

            {/* Decorative lines connecting continents */}
            <line x1="200" y1="150" x2="420" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" className="text-primary" />
            <line x1="200" y1="150" x2="240" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3" className="text-primary" />
            <line x1="480" y1="140" x2="600" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.3" className="text-primary" />
            <line x1="530" y1="200" x2="740" y2="290" stroke="currentColor" strokeWidth="1" opacity="0.3" className="text-primary" />

            {/* Decorative dots for major cities/regions */}
            <g opacity="0.4" className="text-accent">
                <circle cx="180" cy="130" r="3" fill="currentColor" />
                <circle cx="440" cy="100" r="3" fill="currentColor" />
                <circle cx="500" cy="180" r="3" fill="currentColor" />
                <circle cx="650" cy="100" r="3" fill="currentColor" />
                <circle cx="760" cy="300" r="3" fill="currentColor" />
                <circle cx="235" cy="200" r="3" fill="currentColor" />
            </g>

            {/* Gradient overlay for depth */}
            <defs>
                <radialGradient id="centerGlow" cx="50%" cy="40%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </radialGradient>
            </defs>
            <ellipse cx="600" cy="250" rx="800" ry="500" fill="url(#centerGlow)" />
        </svg>
    );
}
