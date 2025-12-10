"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { DollarSign, CheckCircle, ArrowUpRight, ArrowDownRight, Gauge, Repeat } from "lucide-react"
import { TopCustomersTable } from "@/components/dashboard/top-customers-table"
import { RevenueByCabinChart } from "@/components/dashboard/revenue-by-cabin-chart"

// KPI Data
const commercialKpis = [
    {
        title: "Weekly Revenue",
        value: "$842K",
        change: "+8.3%",
        positive: true,
        icon: DollarSign,
        color: "emerald",
    },
    {
        title: "Live Rate",
        value: "$4,285",
        subtitle: "Includes GRP",
        icon: DollarSign,
        color: "amber",
    },
    {
        title: "Completion Rate",
        value: "94.2%",
        change: "+1.8%",
        positive: true,
        icon: CheckCircle,
        color: "emerald",
    },
    {
        title: "Repeat Customers",
        value: "142",
        subtitle: "78% LTM",
        icon: Repeat,
        color: "cyan",
    },
]

// Salesperson Data
const salespersonData = [
    { name: "Sarah Johnson", avatar: "SJ", quotes: 68, booked: 28, avgValue: 52400 },
    { name: "Michael Chen", avatar: "MC", quotes: 54, booked: 19, avgValue: 48200 },
    { name: "John Smith", avatar: "JS", quotes: 62, booked: 21, avgValue: 44800 },
    { name: "Emily Davis", avatar: "ED", quotes: 48, booked: 14, avgValue: 41600 },
    { name: "Robert Wilson", avatar: "RW", quotes: 52, booked: 15, avgValue: 38900 },
]

// Line chart data for quotes over time
const quotesOverTime = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    sarah: Math.floor(1 + Math.random() * 4),
    michael: Math.floor(1 + Math.random() * 3),
    john: Math.floor(1 + Math.random() * 4),
    emily: Math.floor(Math.random() * 3),
    robert: Math.floor(1 + Math.random() * 3),
}))

// Daily quotes by salesperson
const dailyQuotesData = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    sarah: Math.floor(Math.random() * 5),
    michael: Math.floor(Math.random() * 4),
    john: Math.floor(Math.random() * 5),
    emily: Math.floor(Math.random() * 3),
    robert: Math.floor(Math.random() * 4),
}))

// Daily metrics data
const dailyMetricsData = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    revenueBooked: Math.floor(15000 + Math.random() * 35000),
    departingRevenue: Math.floor(12000 + Math.random() * 28000),
    flightHours: Math.floor(4 + Math.random() * 12),
}))



const colorMap: Record<string, { bg: string; text: string }> = {
    emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
    violet: { bg: "bg-violet-500/20", text: "text-violet-400" },
    amber: { bg: "bg-amber-500/20", text: "text-amber-400" },
    cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400" },
    rose: { bg: "bg-rose-500/20", text: "text-rose-400" },
}

export function CommercialPage() {
    return (
        <div className="space-y-6">
            {/* Top KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {commercialKpis.map((kpi) => (
                    <Card
                        key={kpi.title}
                        className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group"
                    >
                        <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <p className="text-xs font-medium text-muted-foreground">{kpi.title}</p>
                                    <p className="text-2xl font-bold tracking-tight text-foreground">{kpi.value}</p>
                                    {kpi.change && (
                                        <span
                                            className={`inline-flex items-center gap-1 text-xs font-medium ${kpi.positive ? "text-emerald-400" : "text-rose-400"}`}
                                        >
                                            {kpi.positive ? (
                                                <ArrowUpRight className="h-3 w-3" />
                                            ) : (
                                                <ArrowDownRight className="h-3 w-3" />
                                            )}
                                            {kpi.change}
                                        </span>
                                    )}
                                    {kpi.subtitle && (
                                        <p className="text-xs text-muted-foreground">{kpi.subtitle}</p>
                                    )}
                                </div>
                                <div className={`rounded-xl p-2 ${colorMap[kpi.color].bg}`}>
                                    <kpi.icon className={`h-4 w-4 ${colorMap[kpi.color].text}`} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Citation X Highlight + Revenue by Customer */}
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
                <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-cyan-500/30">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <Gauge className="h-10 w-10 text-cyan-400 mb-3" />
                        <p className="text-sm text-muted-foreground text-center">Citation X</p>
                        <p className="text-3xl font-bold text-cyan-400 mt-1">$2,847</p>
                        <p className="text-sm text-muted-foreground mt-1">Revenue / Flight Hour</p>
                    </CardContent>
                </Card>
                <TopCustomersTable />
            </div>

            {/* Quotes by Salesperson Chart */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">Quotes by Salesperson</CardTitle>
                    <p className="text-sm text-muted-foreground">Daily quotes over last 30 days</p>
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

            {/* Salesperson Performance Table */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                    <CardTitle className="text-base font-semibold">Salesperson Performance</CardTitle>
                    <p className="text-sm text-muted-foreground">Quotes and booking metrics by team member</p>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-border/50 hover:bg-transparent">
                                <TableHead className="text-muted-foreground">Salesperson</TableHead>
                                <TableHead className="text-muted-foreground text-right">Total Quotes</TableHead>
                                <TableHead className="text-muted-foreground text-right">Total Booked</TableHead>
                                <TableHead className="text-muted-foreground text-right">Booked %</TableHead>
                                <TableHead className="text-muted-foreground text-right">Revenue Booked</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {salespersonData.map((person, idx) => {
                                const bookedPercent = ((person.booked / person.quotes) * 100).toFixed(1)
                                const revenueBooked = person.booked * person.avgValue
                                return (
                                    <TableRow
                                        key={person.name}
                                        className={`border-border/30 hover:bg-secondary/30 transition-colors ${idx === 0 ? "bg-cyan-500/5" : ""}`}
                                    >
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage src={`/.jpg?height=32&width=32&query=${person.name}`} />
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
                                        <TableCell className="text-right font-mono">{bookedPercent}%</TableCell>
                                        <TableCell className="text-right font-mono">${revenueBooked.toLocaleString()}</TableCell>
                                    </TableRow>
                                )
                            })}
                            <TableRow className="border-t-2 border-border/50 bg-secondary/20 font-medium">
                                <TableCell>Total / Average</TableCell>
                                <TableCell className="text-right">284</TableCell>
                                <TableCell className="text-right text-emerald-400">97</TableCell>
                                <TableCell className="text-right font-mono">34.2%</TableCell>
                                <TableCell className="text-right font-mono">$4,382,700</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Daily Quotes by Salesperson Table */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                    <CardTitle className="text-base font-semibold">Daily Quotes by Salesperson</CardTitle>
                    <p className="text-sm text-muted-foreground">Current month breakdown</p>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-border/50 hover:bg-transparent">
                                <TableHead className="text-muted-foreground w-16">Day</TableHead>
                                <TableHead className="text-muted-foreground text-center">Sarah</TableHead>
                                <TableHead className="text-muted-foreground text-center">Michael</TableHead>
                                <TableHead className="text-muted-foreground text-center">John</TableHead>
                                <TableHead className="text-muted-foreground text-center">Emily</TableHead>
                                <TableHead className="text-muted-foreground text-center">Robert</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dailyQuotesData.slice(0, 15).map((row) => (
                                <TableRow key={row.day} className="border-border/30 hover:bg-secondary/30">
                                    <TableCell className="font-medium text-muted-foreground">{row.day}</TableCell>
                                    <TableCell className="text-center">{row.sarah}</TableCell>
                                    <TableCell className="text-center">{row.michael}</TableCell>
                                    <TableCell className="text-center">{row.john}</TableCell>
                                    <TableCell className="text-center">{row.emily}</TableCell>
                                    <TableCell className="text-center">{row.robert}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Showing first 15 days — scroll for more</p>
                </CardContent>
            </Card>

            {/* Daily Metrics Table */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                    <CardTitle className="text-base font-semibold">Daily Metrics</CardTitle>
                    <p className="text-sm text-muted-foreground">Revenue, flight hours, and efficiency by day</p>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-border/50 hover:bg-transparent">
                                <TableHead className="text-muted-foreground w-16">Day</TableHead>
                                <TableHead className="text-muted-foreground text-right">Revenue Booked</TableHead>
                                <TableHead className="text-muted-foreground text-right">Departing Revenue</TableHead>
                                <TableHead className="text-muted-foreground text-right">Flight Hours</TableHead>
                                <TableHead className="text-muted-foreground text-right">Rev / Hour</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dailyMetricsData.slice(0, 15).map((row) => {
                                const revPerHour = row.flightHours > 0 ? Math.round(row.departingRevenue / row.flightHours) : 0
                                return (
                                    <TableRow key={row.day} className="border-border/30 hover:bg-secondary/30">
                                        <TableCell className="font-medium text-muted-foreground">{row.day}</TableCell>
                                        <TableCell className="text-right font-mono">${row.revenueBooked.toLocaleString()}</TableCell>
                                        <TableCell className="text-right font-mono">${row.departingRevenue.toLocaleString()}</TableCell>
                                        <TableCell className="text-right">{row.flightHours.toFixed(1)}</TableCell>
                                        <TableCell className="text-right font-mono text-cyan-400">${revPerHour.toLocaleString()}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Showing first 15 days — scroll for more</p>
                </CardContent>
            </Card>

            {/* Revenue by Cabin */}
            <RevenueByCabinChart />


        </div>
    )
}
