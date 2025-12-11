"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {
  Gauge,
  Clock,
  Plane,
  DollarSign,
  Search,
  TrendingUp,
  Target,
  Activity,
  BarChart3,
  Calendar,
} from "lucide-react"

const revenueKpis = [
  {
    title: "Weekly Revenue",
    value: "$284,500",
    change: "+8.2%",
    positive: true,
    icon: DollarSign,
    color: "emerald",
  },
  {
    title: "MTD Revenue",
    value: "$1,847,200",
    change: "+15.3%",
    positive: true,
    icon: Calendar,
    color: "emerald",
  },
  {
    title: "YTD Revenue",
    value: "$12,847,200",
    change: "+12.4%",
    positive: true,
    icon: TrendingUp,
    color: "emerald",
  },
]

const otherKpis = [
  // Row 1 - Flight hours & efficiency group + live rates
  {
    title: "Live Flight Hours",
    value: "1,586",
    subtitle: "revenue generating",
    icon: Activity,
    color: "violet",
  },
  {
    title: "Total Flight Hours",
    value: "1,842",
    subtitle: "247 flights",
    icon: Plane,
    color: "violet",
  },
  {
    title: "Fleet Efficiency",
    value: "86.1%",
    subtitle: "live / total hours",
    icon: Gauge,
    color: "violet",
  },
  {
    title: "Yield",
    value: "$2,847",
    subtitle: "per flight hour",
    icon: BarChart3,
    color: "cyan",
  },
  // Row 2 - Other metrics
  {
    title: "Live Rate (w/o GRP)",
    value: "82.6%",
    change: "+1.8%",
    positive: true,
    icon: Target,
    color: "cyan",
  },
  {
    title: "Live Rate (w/ GRP)",
    value: "78.4%",
    change: "+2.1%",
    positive: true,
    icon: Target,
    color: "cyan",
  },
  {
    title: "Completion Rate",
    value: "94.2%",
    change: "+0.5%",
    positive: true,
    icon: Activity,
    color: "amber",
  },
  {
    title: "Avg Stage Length",
    value: "2.8 hrs",
    change: "+0.3",
    positive: true,
    icon: Clock,
    color: "amber",
  },
]

const aircraftData = [
  { tail: "N123AB", legs: 48, totalHours: 124.5, liveHours: 112.8, lastFlight: "Today", utilization: 92 },
  { tail: "N456CD", legs: 42, totalHours: 108.2, liveHours: 95.4, lastFlight: "Today", utilization: 85 },
  { tail: "N789EF", legs: 38, totalHours: 96.8, liveHours: 82.1, lastFlight: "Yesterday", utilization: 78 },
  { tail: "N321GH", legs: 35, totalHours: 89.4, liveHours: 71.5, lastFlight: "2 days ago", utilization: 72 },
  { tail: "N654IJ", legs: 28, totalHours: 72.1, liveHours: 58.4, lastFlight: "5 days ago", utilization: 58 },
  { tail: "N987KL", legs: 22, totalHours: 56.3, liveHours: 42.2, lastFlight: "8 days ago", utilization: 45 },
  { tail: "N147MN", legs: 18, totalHours: 46.2, liveHours: 34.8, lastFlight: "12 days ago", utilization: 37 },
]

const trendData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  hours: 45 + Math.random() * 30 + Math.sin(i / 3) * 15,
}))

const utilityByTailData = [
  { tail: "N123JE", owner: 45, otherFlight: 28, idleHome: 12, idleAway: 5, maintenance: 8, other: 2, total: 100 },
  { tail: "N456JE", owner: 38, otherFlight: 35, idleHome: 0, idleAway: 8, maintenance: 6, other: 3, total: 100 },
  { tail: "N789JE", owner: 52, otherFlight: 22, idleHome: 8, idleAway: 6, maintenance: 10, other: 2, total: 100 },
  { tail: "N101JE", owner: 40, otherFlight: 30, idleHome: 15, idleAway: 5, maintenance: 7, other: 3, total: 100 },
  { tail: "N202JE", owner: 35, otherFlight: 40, idleHome: 0, idleAway: 7, maintenance: 8, other: 2, total: 100 },
]

export function UtilizationPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {revenueKpis.map((kpi) => (
          <Card
            key={kpi.title}
            className="relative overflow-hidden bg-emerald-500/10 backdrop-blur-sm border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold tracking-tight text-foreground">{kpi.value}</p>
                  {kpi.change && (
                    <span className={`text-xs font-medium ${kpi.positive ? "text-emerald-400" : "text-rose-400"}`}>
                      {kpi.change}
                    </span>
                  )}
                </div>
                <div className="rounded-lg p-2.5 bg-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                  <kpi.icon className="h-5 w-5 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {otherKpis.map((kpi) => (
          <Card
            key={kpi.title}
            className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-xl font-bold tracking-tight text-foreground">{kpi.value}</p>
                  {kpi.change && (
                    <span className={`text-xs font-medium ${kpi.positive ? "text-emerald-400" : "text-rose-400"}`}>
                      {kpi.change}
                    </span>
                  )}
                  {kpi.subtitle && <p className="text-[10px] text-muted-foreground">{kpi.subtitle}</p>}
                </div>
                <div
                  className={`rounded-lg p-2 bg-${kpi.color}-500/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <kpi.icon className={`h-4 w-4 text-${kpi.color}-400`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Fleet Efficiency by Tail</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search tail..." className="pl-9 w-[200px] bg-secondary/50 border-border/50" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="text-muted-foreground">Tail Number</TableHead>
                <TableHead className="text-muted-foreground text-right">Total Legs</TableHead>
                <TableHead className="text-muted-foreground text-right">Total Flight Hours</TableHead>
                <TableHead className="text-muted-foreground text-right">Live Flight Hours</TableHead>
                <TableHead className="text-muted-foreground text-right">Utilization</TableHead>
                <TableHead className="text-muted-foreground">Last Flight</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aircraftData.map((aircraft, idx) => (
                <TableRow
                  key={aircraft.tail}
                  className={`border-border/30 hover:bg-secondary/30 transition-colors ${idx % 2 === 0 ? "bg-secondary/10" : ""}`}
                >
                  <TableCell>
                    <span className="font-mono text-cyan-400">{aircraft.tail}</span>
                  </TableCell>
                  <TableCell className="text-right font-medium">{aircraft.legs}</TableCell>
                  <TableCell className="text-right font-mono">{aircraft.totalHours.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{aircraft.liveHours.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-medium">{aircraft.utilization}%</TableCell>
                  <TableCell className="text-muted-foreground">{aircraft.lastFlight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-semibold">Utility by Tail</CardTitle>
          <p className="text-sm text-muted-foreground">Percentage breakdown by aircraft usage type</p>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="text-muted-foreground">Tail</TableHead>
                <TableHead className="text-muted-foreground text-right">Owner</TableHead>
                <TableHead className="text-muted-foreground text-right">Other Flight</TableHead>
                <TableHead className="text-muted-foreground text-right">Idle / Home</TableHead>
                <TableHead className="text-muted-foreground text-right">Idle / Away</TableHead>
                <TableHead className="text-muted-foreground text-right">Maintenance</TableHead>
                <TableHead className="text-muted-foreground text-right">Other</TableHead>
                <TableHead className="text-muted-foreground text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {utilityByTailData.map((row) => (
                <TableRow key={row.tail} className="border-border/30 hover:bg-secondary/30">
                  <TableCell className="font-medium font-mono">{row.tail}</TableCell>
                  <TableCell className="text-right">{row.owner}%</TableCell>
                  <TableCell className="text-right">{row.otherFlight}%</TableCell>
                  <TableCell className={`text-right ${row.idleHome > 0 ? "text-rose-400" : ""}`}>
                    {row.idleHome}%
                  </TableCell>
                  <TableCell className="text-right">{row.idleAway}%</TableCell>
                  <TableCell className="text-right">{row.maintenance}%</TableCell>
                  <TableCell className="text-right">{row.other}%</TableCell>
                  <TableCell className="text-right font-medium">{row.total}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">Utilization Trend</CardTitle>
          <p className="text-sm text-muted-foreground">Daily flight hours</p>
        </CardHeader>
        <CardContent>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="utilizationGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#71717a" }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#71717a" }} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(22, 22, 30, 0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                  }}
                  itemStyle={{ color: "#e5e5e5" }}
                />
                <Area
                  type="monotone"
                  dataKey="hours"
                  stroke="#22d3ee"
                  strokeWidth={2}
                  fill="url(#utilizationGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
