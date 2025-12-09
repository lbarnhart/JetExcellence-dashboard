"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { cabin: "Super Midsize", revenue: 485000 },
  { cabin: "Midsize", revenue: 312000 },
  { cabin: "Light", revenue: 178000 },
  { cabin: "Heavy", revenue: 245000 },
]

const formatCurrency = (value: number) => {
  return `$${(value / 1000).toFixed(0)}K`
}

export function RevenueByCabinChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Revenue by Cabin</CardTitle>
        <p className="text-sm text-muted-foreground">Current Period</p>
      </CardHeader>
      <CardContent>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={true} vertical={false} />
              <XAxis
                type="number"
                tickFormatter={formatCurrency}
                tick={{ fontSize: 11, fill: "#71717a" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                type="category"
                dataKey="cabin"
                tick={{ fontSize: 12, fill: "#a1a1aa" }}
                tickLine={false}
                axisLine={false}
                width={100}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(22, 22, 30, 0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
                itemStyle={{ color: "#e5e5e5" }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
              />
              <Bar dataKey="revenue" fill="#22d3ee" radius={[0, 4, 4, 0]} barSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
