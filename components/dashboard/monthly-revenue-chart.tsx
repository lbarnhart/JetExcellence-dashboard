"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", revenue: 1250000 },
  { month: "Feb", revenue: 1180000 },
  { month: "Mar", revenue: 1420000 },
  { month: "Apr", revenue: 1380000 },
  { month: "May", revenue: 1520000 },
  { month: "Jun", revenue: 1680000 },
  { month: "Jul", revenue: 1750000 },
  { month: "Aug", revenue: 1620000 },
  { month: "Sep", revenue: 1480000 },
  { month: "Oct", revenue: 1550000 },
  { month: "Nov", revenue: 1720000 },
  { month: "Dec", revenue: 1890000 },
]

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(1)}M`
}

export function MonthlyRevenueChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Monthly Revenue</CardTitle>
        <p className="text-sm text-muted-foreground">YTD Performance</p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#71717a" }} tickLine={false} axisLine={false} />
              <YAxis
                tickFormatter={formatCurrency}
                tick={{ fontSize: 11, fill: "#71717a" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(22, 22, 30, 0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
                itemStyle={{ color: "#e5e5e5" }}
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
              />
              <Bar dataKey="revenue" fill="#22d3ee" radius={[6, 6, 0, 0]} fillOpacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
