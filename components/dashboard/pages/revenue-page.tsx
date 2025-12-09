"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { DollarSign, TrendingUp, TrendingDown, Calendar, Users, Repeat } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const weeklyData = [
  { week: "Week 1", current: 2850000, lastYear: 2440000 },
  { week: "Week 2", current: 3120000, lastYear: 2690000 },
  { week: "Week 3", current: 2680000, lastYear: 2520000 },
  { week: "Week 4", current: 3340000, lastYear: 2780000 },
]

const topCustomers = [
  { name: "Apex Industries", revenue: 1847320, percentage: 14.4 },
  { name: "GlobalTech Corp", revenue: 1523890, percentage: 11.9 },
  { name: "Summit Holdings", revenue: 1298450, percentage: 10.1 },
  { name: "Pinnacle Group", revenue: 1156780, percentage: 9.0 },
  { name: "Horizon Ventures", revenue: 987650, percentage: 7.7 },
  { name: "Atlas Partners", revenue: 876540, percentage: 6.8 },
  { name: "Meridian Capital", revenue: 765430, percentage: 6.0 },
  { name: "Vertex Solutions", revenue: 654320, percentage: 5.1 },
  { name: "Nexus Dynamics", revenue: 543210, percentage: 4.2 },
  { name: "Sterling Enterprises", revenue: 432100, percentage: 3.4 },
]

const cabinData = [
  { cabin: "Super Midsize", revenue: 4850000 },
  { cabin: "Midsize", revenue: 3120000 },
  { cabin: "Light", revenue: 1780000 },
  { cabin: "Heavy", revenue: 2450000 },
]

export function RevenuePage() {
  const momChange = 12.5
  const mtdProgress = 68

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total YTD Revenue - removed count-up animation, fixed icon sizing */}
        <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-500/50 transition-all duration-300 group hover:glow-cyan">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Total YTD Revenue</p>
                <p className="text-4xl font-bold tracking-tight text-cyan-400">$12,800,000</p>
              </div>
              <div className="rounded-xl p-2.5 bg-cyan-500/20 shrink-0">
                <DollarSign className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MoM Change */}
        <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">MoM Change</p>
                <p
                  className={`text-4xl font-bold tracking-tight ${momChange >= 0 ? "text-emerald-400" : "text-rose-400"}`}
                >
                  {momChange >= 0 ? "+" : ""}
                  {momChange}%
                </p>
              </div>
              <div className={`rounded-xl p-2.5 shrink-0 ${momChange >= 0 ? "bg-emerald-500/20" : "bg-rose-500/20"}`}>
                {momChange >= 0 ? (
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-rose-400" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue per Employee */}
        <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Revenue per Employee</p>
                <p className="text-3xl font-bold tracking-tight text-foreground">$284,444</p>
              </div>
              <div className="rounded-xl p-2.5 bg-cyan-500/20 shrink-0">
                <Users className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue per Pilot */}
        <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Revenue per Pilot</p>
                <p className="text-3xl font-bold tracking-tight text-foreground">$426,667</p>
              </div>
              <div className="rounded-xl p-2.5 bg-violet-500/20 shrink-0">
                <Users className="h-5 w-5 text-violet-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Average Monthly Revenue */}
        <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Avg Monthly Revenue</p>
                  <Badge variant="outline" className="text-[10px] bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                    LTM
                  </Badge>
                </div>
                <p className="text-3xl font-bold tracking-tight text-foreground">$1,066,667</p>
              </div>
              <div className="rounded-xl p-2.5 bg-violet-500/20 shrink-0">
                <Calendar className="h-5 w-5 text-violet-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MTD Revenue - show full number */}
        <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">MTD Revenue</p>
              <p className="text-3xl font-bold tracking-tight text-foreground">$728,000</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{mtdProgress}% of month</span>
                  <span>Target: $1,066,667</span>
                </div>
                <Progress value={mtdProgress} className="h-2 bg-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Repeat Customers */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
          <div className="flex items-center gap-4">
            <div className="rounded-xl p-2.5 bg-emerald-500/20 shrink-0">
              <Repeat className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Repeat Customers</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xl font-bold text-foreground">142</p>
                <Badge
                  variant="outline"
                  className="text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                >
                  78% LTM
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Weekly Revenue Performance</CardTitle>
          <p className="text-sm text-muted-foreground">Current year vs same week last year</p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#71717a" }} tickLine={false} axisLine={false} />
                <YAxis
                  tickFormatter={(v) => `$${(v / 1000000).toFixed(1)}M`}
                  tick={{ fontSize: 11, fill: "#71717a" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(22, 22, 30, 0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                />
                <Legend />
                <Bar
                  dataKey="lastYear"
                  name="Same Week Last Year"
                  fill="rgba(255,255,255,0.15)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar dataKey="current" name="Current Year" fill="#22d3ee" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Top 10 Customers</CardTitle>
            <p className="text-sm text-muted-foreground">By revenue contribution</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {topCustomers.map((customer, idx) => (
              <div key={customer.name} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-4">{idx + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium truncate">{customer.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400">${(customer.revenue / 1000).toFixed(0)}K</span>
                      <span className="text-xs text-muted-foreground">({customer.percentage}%)</span>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                      style={{ width: `${customer.percentage * 5}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Revenue by Cabin Class</CardTitle>
            <p className="text-sm text-muted-foreground">Year to date</p>
          </CardHeader>
          <CardContent>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cabinData} layout="vertical" margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.05)"
                    horizontal={true}
                    vertical={false}
                  />
                  <XAxis
                    type="number"
                    tickFormatter={(v) => `$${(v / 1000000).toFixed(1)}M`}
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
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                  />
                  <Bar dataKey="revenue" fill="#22d3ee" radius={[0, 4, 4, 0]} barSize={36} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
