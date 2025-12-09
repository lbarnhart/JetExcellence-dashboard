"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
} from "recharts"
import { CheckCircle, Clock, Wrench, Search, Plane, ArrowUp, ArrowDown } from "lucide-react"

const performanceKpis = [
  {
    title: "Completion Rate",
    value: "94.2%",
    status: "success",
    subtitle: "Last 30 days",
    icon: CheckCircle,
  },
  {
    title: "Total Hours Flown",
    value: "1,842",
    subtitle: "Current month",
    icon: Clock,
  },
  {
    title: "Cycles per Break",
    value: "TBD",
    subtitle: "Formula Pending",
    icon: Wrench,
  },
]

const aircraftPerformance = [
  { tail: "N123AB", legs: 8, hours: 18.4, revenue: 52400, revPerHour: 2848 },
  { tail: "N456CD", legs: 6, hours: 14.2, revenue: 38900, revPerHour: 2739 },
  { tail: "N789EF", legs: 7, hours: 16.8, revenue: 44200, revPerHour: 2631 },
  { tail: "N321GH", legs: 5, hours: 12.1, revenue: 28400, revPerHour: 2347 },
  { tail: "N654IJ", legs: 4, hours: 9.6, revenue: 21800, revPerHour: 2271 },
  { tail: "N987KL", legs: 3, hours: 7.2, revenue: 14200, revPerHour: 1972 },
  { tail: "N147MN", legs: 2, hours: 4.8, revenue: 8900, revPerHour: 1854 },
]

const REV_HOUR_TARGET = 2500

const completionTrend = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  rate: 90 + Math.random() * 8 + (i > 20 ? 2 : 0),
}))

export function PerformancePage() {
  const getStatusBadge = (revPerHour: number) => {
    const isAboveTarget = revPerHour >= REV_HOUR_TARGET
    if (isAboveTarget) {
      return (
        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
          <ArrowUp className="w-3 h-3 mr-1" />
          Above Target
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-rose-500/10 text-rose-400 border-rose-500/30">
        <ArrowDown className="w-3 h-3 mr-1" />
        Below Target
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {performanceKpis.map((kpi) => (
          <Card
            key={kpi.title}
            className={`relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group ${
              kpi.status === "success" ? "hover:glow-emerald" : ""
            }`}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p
                    className={`text-3xl font-bold tracking-tight ${
                      kpi.status === "success" ? "text-emerald-400" : "text-foreground"
                    }`}
                  >
                    {kpi.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{kpi.subtitle}</p>
                </div>
                <div
                  className={`rounded-xl p-3 ${
                    kpi.status === "success" ? "bg-emerald-500/20" : "bg-cyan-500/20"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <kpi.icon className={`h-5 w-5 ${kpi.status === "success" ? "text-emerald-400" : "text-cyan-400"}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Aircraft Performance Table - status now shows above/below $2,500 target */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">Aircraft Performance - Prior Day</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Revenue efficiency by tail number (Target: ${REV_HOUR_TARGET.toLocaleString()}/hr)
              </p>
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
                <TableHead className="text-muted-foreground text-right">Legs</TableHead>
                <TableHead className="text-muted-foreground text-right">Flight Hours</TableHead>
                <TableHead className="text-muted-foreground text-right">Revenue</TableHead>
                <TableHead className="text-muted-foreground text-right">Rev/Hour</TableHead>
                <TableHead className="text-muted-foreground text-center">vs Target</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aircraftPerformance.map((aircraft, idx) => (
                <TableRow
                  key={aircraft.tail}
                  className={`border-border/30 hover:bg-secondary/30 transition-colors ${
                    aircraft.revPerHour >= REV_HOUR_TARGET ? "bg-emerald-500/5" : ""
                  }`}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-muted-foreground" />
                      <span className="font-mono text-cyan-400">{aircraft.tail}</span>
                      {idx < 3 && (
                        <Badge
                          variant="outline"
                          className="text-[10px] bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                        >
                          Top {idx + 1}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">{aircraft.legs}</TableCell>
                  <TableCell className="text-right font-mono">{aircraft.hours.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">${aircraft.revenue.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`font-mono font-bold ${aircraft.revPerHour >= REV_HOUR_TARGET ? "text-emerald-400" : "text-rose-400"}`}
                    >
                      ${aircraft.revPerHour.toLocaleString()}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">{getStatusBadge(aircraft.revPerHour)}</TableCell>
                </TableRow>
              ))}
              {/* Totals Row */}
              <TableRow className="border-t-2 border-border/50 bg-secondary/20 font-medium">
                <TableCell>Totals</TableCell>
                <TableCell className="text-right">35</TableCell>
                <TableCell className="text-right font-mono">83.1</TableCell>
                <TableCell className="text-right font-mono">$208,800</TableCell>
                <TableCell className="text-right">
                  <span className="font-mono font-bold text-cyan-400">$2,513</span>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* Completion Rate Trend */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Completion Rate Trend</CardTitle>
            <p className="text-sm text-muted-foreground">Last 30 days</p>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={completionTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#71717a" }} tickLine={false} axisLine={false} />
                  <YAxis
                    domain={[85, 100]}
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(22, 22, 30, 0.95)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                    }}
                    formatter={(value: number) => [`${value.toFixed(1)}%`, "Completion Rate"]}
                  />
                  <ReferenceArea y1={85} y2={90} fill="rgba(255,71,87,0.1)" />
                  <ReferenceLine y={95} stroke="#22d3ee" strokeDasharray="5 5" />
                  <ReferenceLine y={90} stroke="#fbbf24" strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="rate" stroke="#34d399" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-cyan-400" style={{ borderStyle: "dashed" }} />
                <span className="text-muted-foreground">Target (95%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-amber-400" style={{ borderStyle: "dashed" }} />
                <span className="text-muted-foreground">Warning (90%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Controllable Cancellations</p>
            <p className="text-2xl font-bold text-rose-400 mt-1">3</p>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Total Trips</p>
            <p className="text-2xl font-bold text-foreground mt-1">247</p>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Avg Revenue per Flight</p>
            <p className="text-2xl font-bold text-cyan-400 mt-1">$5,182</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
