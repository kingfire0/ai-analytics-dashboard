'use client'

import { useState, useEffect } from 'react'
import { mockDashboardData } from '@/lib/data'
import { DashboardData } from '@/lib/types'

export function useDashboardData() {
  const [data, setData] = useState<DashboardData>(mockDashboardData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const refreshData = () => {
    setIsLoading(true)
    // Simulate API refresh
    setTimeout(() => {
      setData(mockDashboardData)
      setIsLoading(false)
    }, 1000)
  }

  return { data, isLoading, refreshData }
}
