"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Revenue", value: 14, days: 14, color: "#22d3ee" },
  { name: "Available", value: 8, days: 8, color: "#34d399" },
  { name: "Maintenance", value: 5, days: 5, color: "#fbbf24" },
  { name: "Repositioning", value: 3, days: 3, color: "#a78bfa" },
  { name: "AOG", value: 1, days: 1, color: "#f87171" },
]

const totalDays = data.reduce((sum, d) => sum + d.days, 0)

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const entry = payload[0].payload
    const percentage = ((entry.days / totalDays) * 100).toFixed(1)
    return (
      <div className="bg-[rgba(22,22,30,0.95)] border border-white/10 rounded-xl p-3 shadow-lg">
        <p className="text-sm font-medium text-foreground">{entry.name}</p>
        <p className="text-lg font-bold" style={{ color: entry.color }}>
          {entry.days} days
        </p>
        <p className="text-xs text-muted-foreground">{percentage}% of month</p>
      </div>
    )
  }
  return null
}

export function FleetUtilizationChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Fleet Utilization</CardTitle>
        <p className="text-sm text-muted-foreground">Citation X - Current Month ({totalDays} days)</p>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] flex items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-xs text-muted-foreground">
                {item.name} ({item.days}d)
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
