export interface MetricData {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: 'revenue' | 'users' | 'conversions' | 'growth'
}

export interface ChartData {
  revenue: Array<{ month: string; value: number }>
  campaigns: Array<{ name: string; value: number }>
  traffic: Array<{ name: string; value: number; color: string }>
  performance: Array<{ time: string; accuracy: number; confidence: number }>
}

export interface CampaignData {
  id: number
  name: string
  status: 'Active' | 'Paused' | 'Completed'
  budget: string
  spent: string
  impressions: string
  clicks: string
  conversions: string
  ctr: string
  cpc: string
  date: string
}

export interface DashboardData {
  metrics: MetricData[]
  charts: ChartData
  campaigns: CampaignData[]
}