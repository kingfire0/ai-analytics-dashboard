'use client'

import { ResponsiveContainer, AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface AreaChartProps {
  data: Array<{ time: string; accuracy: number; confidence: number }>
}

export function AreaChart({ data }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsAreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          dataKey="time" 
          tick={{ fontSize: 12 }}
          className="text-muted-foreground"
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          className="text-muted-foreground"
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
          }}
        />
        <Area 
          type="monotone" 
          dataKey="accuracy" 
          stackId="1"
          stroke="#8B5CF6" 
          fill="#8B5CF6"
          fillOpacity={0.6}
        />
        <Area 
          type="monotone" 
          dataKey="confidence" 
          stackId="1"
          stroke="#06B6D4" 
          fill="#06B6D4"
          fillOpacity={0.6}
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  )
}
