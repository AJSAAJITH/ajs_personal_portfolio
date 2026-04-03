import { Skeleton } from '@/components/ui/skeleton';

export function ProjectCardSkeleton() {
    return (
        <div className="h-full rounded-xl glass p-2 animate-pulse">
            <Skeleton className="h-48 w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-5/6 mb-1" />
            <Skeleton className="h-4 w-2/3" />
        </div>
    );
}