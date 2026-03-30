'use client';

export function ContactMapBg() {
    return (
        <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5 pointer-events-none overflow-hidden">
            <svg
                viewBox="0 0 1200 600"
                className="w-full h-full text-primary"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Simplified World Map Outline */}
                <g stroke="currentColor" strokeWidth="2" fill="none">
                    {/* North America */}
                    <path d="M 150 150 L 180 140 L 200 160 L 190 200 L 160 210 L 140 180 Z" />

                    {/* South America */}
                    <path d="M 180 220 L 200 230 L 210 300 L 190 320 L 170 300 Z" />

                    {/* Europe */}
                    <path d="M 450 140 L 480 135 L 500 155 L 490 180 L 460 185 Z" />

                    {/* Africa */}
                    <path d="M 500 200 L 540 190 L 560 300 L 530 340 L 490 320 Z" />

                    {/* Asia */}
                    <path d="M 600 120 L 750 100 L 800 180 L 700 220 L 650 190 Z" />

                    {/* Australia */}
                    <path d="M 750 350 L 790 340 L 800 400 L 760 410 Z" />
                </g>

                {/* Connection Lines - showing global connectivity */}
                <g stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeDasharray="5,5">
                    {/* Lines connecting major regions */}
                    <line x1="170" y1="180" x2="465" y2="160" />
                    <line x1="465" y1="160" x2="650" y2="150" />
                    <line x1="650" y1="150" x2="770" y2="370" />
                    <line x1="465" y1="160" x2="520" y2="250" />
                    <line x1="520" y1="250" x2="770" y2="370" />
                    <line x1="170" y1="180" x2="190" y2="270" />
                    <line x1="190" y1="270" x2="520" y2="250" />
                </g>

                {/* Major Cities/Connection Points - Location Pins */}
                <g fill="currentColor">
                    {/* New York */}
                    <circle cx="180" cy="155" r="4" />
                    <circle cx="180" cy="155" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

                    {/* London */}
                    <circle cx="460" cy="155" r="4" />
                    <circle cx="460" cy="155" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

                    {/* Dubai */}
                    <circle cx="570" cy="210" r="4" />
                    <circle cx="570" cy="210" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

                    {/* Tokyo */}
                    <circle cx="800" cy="160" r="4" />
                    <circle cx="800" cy="160" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

                    {/* Singapore */}
                    <circle cx="720" cy="280" r="4" />
                    <circle cx="720" cy="280" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

                    {/* Sydney */}
                    <circle cx="780" cy="390" r="4" />
                    <circle cx="780" cy="390" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

                    {/* São Paulo */}
                    <circle cx="200" cy="280" r="4" />
                    <circle cx="200" cy="280" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

                    {/* Lagos */}
                    <circle cx="530" cy="280" r="4" />
                    <circle cx="530" cy="280" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                </g>

                {/* Decorative Grid Lines - subtle longitude/latitude */}
                <g stroke="currentColor" strokeWidth="0.5" opacity="0.15">
                    {/* Vertical lines */}
                    <line x1="200" y1="100" x2="200" y2="400" />
                    <line x1="400" y1="100" x2="400" y2="400" />
                    <line x1="600" y1="100" x2="600" y2="400" />
                    <line x1="800" y1="100" x2="800" y2="400" />

                    {/* Horizontal lines */}
                    <line x1="100" y1="200" x2="900" y2="200" />
                    <line x1="100" y1="300" x2="900" y2="300" />
                </g>

                {/* Center point indicator (contact location) */}
                <circle cx="600" cy="300" r="3" fill="currentColor" opacity="0.5" />
                <circle cx="600" cy="300" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                <circle cx="600" cy="300" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
            </svg>
        </div>
    );
}
