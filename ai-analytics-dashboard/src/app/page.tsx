'use client'

import { useState, useEffect } from 'react'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { MetricsCards } from '@/components/dashboard/metrics-cards'
import { ChartsGrid } from '@/components/dashboard/charts-grid'
import { DataTable } from '@/components/dashboard/data-table'
import { useDashboardData } from '@/hooks/use-dashboard-data'
import { LoadingSkeleton } from '@/components/ui/loading-skeleton'

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { data, isLoading: dataLoading, refreshData } = useDashboardData()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading || dataLoading) {
    return <LoadingSkeleton />
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 p-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome to TechoBrand Insights - Your complete analytics solution
          </p>
        </div>
        
        <MetricsCards data={data.metrics} />
        <ChartsGrid data={data.charts} />
        <DataTable data={data.campaigns} />
      </div>
    </DashboardLayout>
  )
}
