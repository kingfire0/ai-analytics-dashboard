import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar skeleton */}
        <div className="fixed inset-y-0 left-0 w-64 bg-card border-r">
          <div className="p-6">
            <Skeleton className="h-8 w-32" />
          </div>
          <div className="px-4 space-y-2">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        </div>

        {/* Main content skeleton */}
        <div className="ml-64 flex-1">
          {/* Header skeleton */}
          <div className="h-16 border-b bg-background/95 backdrop-blur">
            <div className="flex items-center justify-between px-6 h-full">
              <Skeleton className="h-10 w-72" />
              <div className="flex items-center space-x-2">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>

          {/* Dashboard content skeleton */}
          <div className="p-8 space-y-8">
            <div className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-96" />
            </div>

            {/* Metrics cards skeleton */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-lg border bg-card p-6">
                  <div className="flex items-center justify-between space-y-0 pb-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-4" />
                  </div>
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-3 w-32 mt-2" />
                </div>
              ))}
            </div>

            {/* Charts skeleton */}
            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-lg border bg-card">
                  <div className="p-6 pb-2">
                    <Skeleton className="h-6 w-32" />
                  </div>
                  <div className="p-6 pt-0">
                    <Skeleton className="h-[300px] w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Skeleton }