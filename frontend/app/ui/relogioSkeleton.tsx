export default function RelogioSkeleton() {
    return (
        <div className="flex w-full animate-pulse flex-col gap-4">
            <div className="h-6 w-32 rounded bg-gray-200" />
            <div className="flex items-baseline gap-2">
                <div className="h-16 w-40 rounded bg-gray-200" />
                <div className="h-6 w-8 rounded bg-gray-200" />
            </div>
            <div className="h-6 w-20 rounded bg-gray-200" />
            <div className="h-12 w-full rounded-lg bg-gray-200" />
            <div className="h-6 w-full rounded-lg bg-gray-200" />
        </div>
    );
}
