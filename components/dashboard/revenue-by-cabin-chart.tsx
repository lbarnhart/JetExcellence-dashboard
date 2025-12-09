"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "1", superMidsize: 45000, midsize: 32000 },
  { day: "5", superMidsize: 52000, midsize: 38000 },
  { day: "10", superMidsize: 48000, midsize: 41000 },
  { day: "15", superMidsize: 61000, midsize: 35000 },
  { day: "20", superMidsize: 55000, midsize: 42000 },
  { day: "25", superMidsize: 67000, midsize: 48000 },
  { day: "30", superMidsize: 72000, midsize: 51000 },
]

const formatCurrency = (value: number) => {
  return `$${(value / 1000).toFixed(0)}K`
}

export function RevenueByCabinChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Revenue by Cabin</CardTitle>
        <p className="text-sm text-muted-foreground">Last 30 days</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400" />
            <span className="text-xs text-muted-foreground">Super Midsize Jet</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-xs text-muted-foreground">Midsize Jet</span>
          </div>
        </div>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 11, fill: "#71717a" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `Day ${value}`}
              />
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
                formatter={(value: number, name: string) => [
                  `$${value.toLocaleString()}`,
                  name === "superMidsize" ? "Super Midsize" : "Midsize",
                ]}
              />
              <Line
                type="monotone"
                dataKey="superMidsize"
                stroke="#22d3ee"
                strokeWidth={2.5}
                dot={{ fill: "#22d3ee", strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, fill: "#22d3ee", stroke: "#22d3ee", strokeWidth: 2, strokeOpacity: 0.3 }}
              />
              <Line
                type="monotone"
                dataKey="midsize"
                stroke="#34d399"
                strokeWidth={2.5}
                dot={{ fill: "#34d399", strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, fill: "#34d399", stroke: "#34d399", strokeWidth: 2, strokeOpacity: 0.3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
