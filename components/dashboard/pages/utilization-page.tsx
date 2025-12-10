"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Gauge, Clock, Plane, DollarSign, Search } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const utilizationKpis = [
  {
    title: "Fleet Utilization",
    value: "72.4%",
    change: "+3.2%",
    positive: true,
    icon: Gauge,
    color: "cyan",
  },
  {
    title: "Avg Stage Length",
    value: "2.8 hrs",
    change: "+0.3",
    positive: true,
    icon: Clock,
    color: "emerald",
  },
  {
    title: "Total Flight Hours",
    value: "1,842",
    subtitle: "247 flights",
    icon: Plane,
    color: "violet",
  },
  {
    title: "Yield",
    value: "$2,847",
    subtitle: "per flight hour",
    icon: DollarSign,
    color: "amber",
  },
]

const aircraftData = [
  { tail: "N123AB", legs: 48, hours: 124.5, lastFlight: "Today", utilization: 92, status: "active" },
  { tail: "N456CD", legs: 42, hours: 108.2, lastFlight: "Today", utilization: 85, status: "active" },
  { tail: "N789EF", legs: 38, hours: 96.8, lastFlight: "Yesterday", utilization: 78, status: "active" },
  { tail: "N321GH", legs: 35, hours: 89.4, lastFlight: "2 days ago", utilization: 72, status: "active" },
  { tail: "N654IJ", legs: 28, hours: 72.1, lastFlight: "5 days ago", utilization: 58, status: "idle" },
  { tail: "N987KL", legs: 22, hours: 56.3, lastFlight: "8 days ago", utilization: 45, status: "warning" },
  { tail: "N147MN", legs: 18, hours: 46.2, lastFlight: "12 days ago", utilization: 37, status: "warning" },
]

const trendData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  hours: 45 + Math.random() * 30 + Math.sin(i / 3) * 15,
}))

const utilityByTailData = [
  { tail: "N123JE", owner: 45, otherFlight: 28, idleHome: 12, idleAway: 5, maintenance: 8, other: 2, total: 100 },
  { tail: "N456JE", owner: 38, otherFlight: 35, idleHome: 10, idleAway: 8, maintenance: 6, other: 3, total: 100 },
  { tail: "N789JE", owner: 52, otherFlight: 22, idleHome: 8, idleAway: 6, maintenance: 10, other: 2, total: 100 },
  { tail: "N101JE", owner: 40, otherFlight: 30, idleHome: 15, idleAway: 5, maintenance: 7, other: 3, total: 100 },
  { tail: "N202JE", owner: 35, otherFlight: 40, idleHome: 8, idleAway: 7, maintenance: 8, other: 2, total: 100 },
]

export function UtilizationPage() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {utilizationKpis.map((kpi) => (
          <Card
            key={kpi.title}
            className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group hover:glow-cyan"
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-3xl font-bold tracking-tight text-foreground">{kpi.value}</p>
                  {kpi.change && (
                    <span className={`text-sm font-medium ${kpi.positive ? "text-emerald-400" : "text-rose-400"}`}>
                      {kpi.change}
                    </span>
                  )}
                  {kpi.subtitle && <p className="text-xs text-muted-foreground">{kpi.subtitle}</p>}
                </div>
                <div
                  className={`rounded-xl p-3 bg-${kpi.color}-500/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <kpi.icon className={`h-5 w-5 text-${kpi.color}-400`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Aircraft Table */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">Live Flight Hours by Aircraft</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Real-time utilization metrics</p>
            </div>
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
                <TableHead className="text-muted-foreground text-right">Flight Hours</TableHead>
                <TableHead className="text-muted-foreground">Last Flight</TableHead>
                <TableHead className="text-muted-foreground">Utilization</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aircraftData.map((aircraft, idx) => (
                <TableRow
                  key={aircraft.tail}
                  className={`border-border/30 hover:bg-secondary/30 transition-colors ${idx % 2 === 0 ? "bg-secondary/10" : ""}`}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${aircraft.status === "active"
                          ? "bg-emerald-500"
                          : aircraft.status === "idle"
                            ? "bg-amber-500"
                            : "bg-rose-500"
                          }`}
                      />
                      <span className="font-mono text-cyan-400">{aircraft.tail}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">{aircraft.legs}</TableCell>
                  <TableCell className="text-right font-mono">{aircraft.hours.toFixed(1)}</TableCell>
                  <TableCell className="text-muted-foreground">{aircraft.lastFlight}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Progress value={aircraft.utilization} className="h-2 w-24 bg-secondary" />
                      <span className="text-sm font-medium w-10">{aircraft.utilization}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        {/* Trend Chart */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Utilization Trend</CardTitle>
            <p className="text-sm text-muted-foreground">Daily flight hours - Last 30 days</p>
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

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Total Available Hours</p>
            <p className="text-2xl font-bold text-foreground mt-1">2,544</p>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Maintenance Hours</p>
            <p className="text-2xl font-bold text-amber-400 mt-1">312</p>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Down Time</p>
            <p className="text-2xl font-bold text-rose-400 mt-1">78</p>
          </Card>
        </div>
      </div>

      {/* Utility by Tail Table */}
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
                  <TableCell className="text-right text-cyan-400">{row.otherFlight}%</TableCell>
                  <TableCell className="text-right">{row.idleHome}%</TableCell>
                  <TableCell className="text-right">{row.idleAway}%</TableCell>
                  <TableCell className="text-right text-amber-400">{row.maintenance}%</TableCell>
                  <TableCell className="text-right">{row.other}%</TableCell>
                  <TableCell className="text-right font-medium">{row.total}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
