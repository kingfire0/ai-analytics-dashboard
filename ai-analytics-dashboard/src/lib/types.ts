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
