"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { DollarSign, FileText, Target, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { TopCustomersTable } from "@/components/dashboard/top-customers-table"
import { RevenueByCabinChart } from "@/components/dashboard/revenue-by-cabin-chart"

const quotingKpis = [
  {
    title: "Avg Quote Value",
    value: "$45.2K",
    change: "+8.4%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Quotes This Month",
    value: "284",
    change: "+12",
    positive: true,
    icon: FileText,
  },
  {
    title: "Quote to Book",
    value: "34.2%",
    target: "35%",
    icon: Target,
  },
  {
    title: "Avg Response Time",
    value: "02:34:18",
    target: "03:00:00",
    icon: Clock,
  },
]

const salespersonData = [
  { name: "Sarah Johnson", avatar: "SJ", quotes: 68, booked: 28, avgValue: 52400, rank: "S" },
  { name: "Michael Chen", avatar: "MC", quotes: 54, booked: 19, avgValue: 48200, rank: "A" },
  { name: "John Smith", avatar: "JS", quotes: 62, booked: 21, avgValue: 44800, rank: "A" },
  { name: "Emily Davis", avatar: "ED", quotes: 48, booked: 14, avgValue: 41600, rank: "B" },
  { name: "Robert Wilson", avatar: "RW", quotes: 52, booked: 15, avgValue: 38900, rank: "B" },
]

const quotesOverTime = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  sarah: Math.floor(1 + Math.random() * 4),
  michael: Math.floor(1 + Math.random() * 3),
  john: Math.floor(1 + Math.random() * 4),
  emily: Math.floor(Math.random() * 3),
  robert: Math.floor(1 + Math.random() * 3),
}))

export function QuotingPage() {
  const getRankBadge = (rank: string) => {
    const colors = {
      S: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      A: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      B: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      C: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    }
    return colors[rank as keyof typeof colors] || colors.C
  }

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quotingKpis.map((kpi) => (
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
                    <span
                      className={`inline-flex items-center gap-1 text-sm font-medium ${kpi.positive ? "text-emerald-400" : "text-rose-400"}`}
                    >
                      {kpi.positive ? (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowDownRight className="h-3.5 w-3.5" />
                      )}
                      {kpi.change}
                    </span>
                  )}
                  {kpi.target && (
                    <p className="text-xs text-muted-foreground">
                      Target: <span className="text-cyan-400">{kpi.target}</span>
                    </p>
                  )}
                </div>
                <div className="rounded-xl p-3 bg-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                  <kpi.icon className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Salesperson Table - Removed Quote-to-Book column */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Salesperson Performance</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Quote metrics by team member</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="text-muted-foreground">Salesperson</TableHead>
                <TableHead className="text-muted-foreground text-right">Total Quotes</TableHead>
                <TableHead className="text-muted-foreground text-right">Booked</TableHead>
                <TableHead className="text-muted-foreground text-right">Avg Value</TableHead>
                <TableHead className="text-muted-foreground text-center">Rank</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salespersonData.map((person, idx) => (
                <TableRow
                  key={person.name}
                  className={`border-border/30 hover:bg-secondary/30 transition-colors ${idx === 0 ? "bg-cyan-500/5" : ""}`}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/.jpg?height=32&width=32&query=${person.name} professional headshot`} />
                        <AvatarFallback className="bg-secondary text-xs">{person.avatar}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{person.name}</span>
                      {idx === 0 && (
                        <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 text-xs">
                          Top Performer
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">{person.quotes}</TableCell>
                  <TableCell className="text-right font-medium text-emerald-400">{person.booked}</TableCell>
                  <TableCell className="text-right font-mono">${person.avgValue.toLocaleString()}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={`${getRankBadge(person.rank)} font-bold`}>
                      {person.rank}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
              {/* Summary Row */}
              <TableRow className="border-t-2 border-border/50 bg-secondary/20 font-medium">
                <TableCell>Total / Average</TableCell>
                <TableCell className="text-right">284</TableCell>
                <TableCell className="text-right text-emerald-400">97</TableCell>
                <TableCell className="text-right font-mono">$45,180</TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Quoted Trips by Salesperson</CardTitle>
            <p className="text-sm text-muted-foreground">Last 30 days</p>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={quotesOverTime} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
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
                  <Legend />
                  <Line type="monotone" dataKey="sarah" name="Sarah" stroke="#22d3ee" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="michael" name="Michael" stroke="#a78bfa" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="john" name="John" stroke="#34d399" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="emily" name="Emily" stroke="#fbbf24" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="robert" name="Robert" stroke="#f87171" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Total Quotes</p>
            <p className="text-2xl font-bold text-violet-400 mt-1">284</p>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Total Booked</p>
            <p className="text-2xl font-bold text-cyan-400 mt-1">97</p>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-5">
            <p className="text-sm text-muted-foreground">Overall Conversion</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 -rotate-90">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${34.2 * 1.76} 176`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-cyan-400">
                  34.2%
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Customer and Revenue Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopCustomersTable />
        <RevenueByCabinChart />
      </div>
    </div>
  )
}
