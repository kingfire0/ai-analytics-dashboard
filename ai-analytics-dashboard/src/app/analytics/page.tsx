'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Mock data (replace with real API data)
const analyticsData = [
  { month: 'Jan', revenue: 42000, users: 12000 },
  { month: 'Feb', revenue: 48800, users: 14000 },
  { month: 'Mar', revenue: 54000, users: 16000 },
  { month: 'Apr', revenue: 58000, users: 18000 },
  { month: 'May', revenue: 60000, users: 20000 },
  { month: 'Jun', revenue: 65000, users: 22000 },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-8">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
        <p className="text-muted-foreground">Track revenue and user trends over time.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Revenue and User Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={analyticsData}>
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
                <Line yAxisId="right" type="monotone" dataKey="users" stroke="#82ca9d" name="Users" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
