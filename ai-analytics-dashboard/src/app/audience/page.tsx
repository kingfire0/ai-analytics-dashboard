'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts'

// Mock data (replace with real API data)
const deviceData = [
  { name: 'Mobile', value: 70, color: '#8884d8' },
  { name: 'Desktop', value: 30, color: '#82ca9d' },
]

const audienceInsights = [
  { label: 'Demographic', value: '55% female, 45% male' },
  { label: 'Top Region', value: 'New York (32%)' },
  { label: 'Most Active Time', value: '7pm - 9pm' },
  { label: 'Avg. Session Duration', value: '4:11' },
]

export default function AudiencePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-8">
        <h1 className="text-3xl font-bold tracking-tight">Audience Insights</h1>
        <p className="text-muted-foreground">Analyze demographics and behavior.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Device Split</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={deviceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {audienceInsights.map((insight, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-medium">{insight.label}:</span>
                  <span>{insight.value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
