import { DashboardLayout } from '@/components/dashboard/dashboard-layout'

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
          <p className="text-gray-600">
            Advanced analytics and performance metrics
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Traffic Analytics</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">125,843</div>
            <p className="text-gray-600">Total page views this month</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">4:32</div>
            <p className="text-gray-600">Average session duration</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Bounce Rate</h3>
            <div className="text-3xl font-bold text-orange-600 mb-2">23.4%</div>
            <p className="text-gray-600">Visitors leaving immediately</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
