'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain } from 'lucide-react'

// Mock AI insights (in real app, fetch from AI API like OpenAI)
const aiInsights = [
  { title: 'Campaign Optimization', description: 'Pause low-CTR campaigns to save 15% on budget.', severity: 'High' },
  { title: 'Audience Growth', description: 'Target New York users for 20% more conversions.', severity: 'Medium' },
  { title: 'Revenue Prediction', description: 'Next month: $70,000 (up 8% based on trends).', severity: 'Low' },
  { title: 'Anomaly Detection', description: 'Unusual drop in mobile traffic - check ad targeting.', severity: 'High' },
]

export default function InsightsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-8">
        <h1 className="text-3xl font-bold tracking-tight">🧠 AI Insights</h1>
        <p className="text-muted-foreground">AI-powered recommendations and predictions based on your data.</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {aiInsights.map((insight, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                <CardTitle>{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{insight.description}</p>
                <span className={`text-sm mt-2 inline-block px-2 py-1 rounded-full ${
                  insight.severity === 'High' ? 'bg-red-100 text-red-800' :
                  insight.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  Severity: {insight.severity}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
