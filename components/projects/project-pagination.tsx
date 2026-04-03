'use client';

import {
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

interface Props {
    totalPages: number;
    currentPage: number;
    onPrev: () => void;
    onNext: () => void;
    onDotClick: (index: number) => void;
}

export function ProjectPagination({
    totalPages,
    currentPage,
    onPrev,
    onNext,
    onDotClick,
}: Props) {
    return (
        <div className="flex justify-center items-center gap-4 mt-10">
            <button
                onClick={onPrev}
                className="p-3 rounded-full border border-primary/20"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
                {Array.from({
                    length: totalPages,
                }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            onDotClick(index)
                        }
                        className={`h-2 rounded-full transition-all duration-300 ${currentPage === index
                            ? 'w-8 bg-primary'
                            : 'w-2 bg-primary/30'
                            }`}
                    />
                ))}
            </div>

            <button
                onClick={onNext}
                className="p-3 rounded-full border border-primary/20"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}