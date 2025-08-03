'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ChartsGridProps {
  data: any
}

export function ChartsGrid({ data }: ChartsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Chart Coming Soon
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Chart Coming Soon
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
