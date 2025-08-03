'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, DollarSign, Users, MousePointer, Target } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MetricData } from '@/lib/types'

interface MetricsCardsProps {
  data: MetricData[]
}

const iconMap = {
  revenue: DollarSign,
  users: Users,
  conversions: MousePointer,
  growth: Target,
}

export function MetricsCards({ data }: MetricsCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {data.map((metric, index) => {
        const Icon = iconMap[metric.icon]
        const isPositive = metric.trend === 'up'
        
        return (
          <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-1 text-xs">
                {isPositive ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span
                  className={cn(
                    "font-medium",
                    isPositive ? "text-green-500" : "text-red-500"
                  )}
                >
                  {metric.change}
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
