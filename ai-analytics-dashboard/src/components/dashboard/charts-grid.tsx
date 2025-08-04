'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, BarChart, PieChart, AreaChart } from 'recharts' // From recharts

// Mock data (move to useDashboardData hook)
const mockCharts = {
  revenue: [{ month: 'Jan', value: 4000 }, { month: 'Feb', value: 3000 } /* add more */],
  campaigns: [{ name: 'Google Ads', value: 4500 } /* add more */],
  traffic: [{ name: 'Organic', value: 35 } /* add more */],
  performance: [{ time: '00:00', accuracy: 91, confidence: 87 } /* add more */],
}

export function ChartsGrid({ data = mockCharts }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart width={400} height={300} data={data.revenue}>
            {/* Add Recharts elements: XAxis, YAxis, Line, etc. */}
          </LineChart>
        </CardContent>
      </Card>
      {/* Similarly for BarChart, PieChart (Donut), AreaChart */}
    </div>
  )
}
