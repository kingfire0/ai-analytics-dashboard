'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { DataTable } from '@/components/dashboard/data-table'
import { CampaignData } from '@/lib/types'

// Mock data (replace with real API data) - Ensure status matches union type
const campaignData: CampaignData[] = [
  { id: 1, name: 'Summer Sale', status: 'Active', budget: '$5000', spent: '$3456', impressions: '10000', clicks: '4321', conversions: '234', ctr: '43.21%', cpc: '$0.80', date: '2024-01-15' },
  { id: 2, name: 'Brand Awareness', status: 'Active', budget: '$8000', spent: '$5234', impressions: '15000', clicks: '6789', conversions: '412', ctr: '45.26%', cpc: '$0.77', date: '2024-01-10' },
  { id: 3, name: 'Holiday Special', status: 'Completed', budget: '$12000', spent: '$11890', impressions: '20000', clicks: '12345', conversions: '876', ctr: '61.73%', cpc: '$0.96', date: '2023-12-01' },
  // Add more rows as needed
]

export default function CampaignsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-8">
        <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
        <p className="text-muted-foreground">Manage and view your marketing campaigns.</p>
        <DataTable data={campaignData} />
      </div>
    </DashboardLayout>
  )
}
