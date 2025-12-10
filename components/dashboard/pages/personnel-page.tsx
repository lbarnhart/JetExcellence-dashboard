"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Plane, DollarSign, TrendingDown, UserCheck, UserX } from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Personnel Data
const personnelData = {
    totalEmployees: 45,
    totalPilots: 30,
    totalAircraft: 7,
    pilotsNeeded: 28, // 4 pilots per plane
    revenue: 12800000,
    pilotAttritionRate: 8.2, // percentage
}

// Calculate derived metrics
const pilotsPerPlane = personnelData.totalPilots / personnelData.totalAircraft
const crewedPercentage = (personnelData.totalPilots / personnelData.pilotsNeeded) * 100
const revenuePerEmployee = personnelData.revenue / personnelData.totalEmployees
const revenuePerPilot = personnelData.revenue / personnelData.totalPilots

const personnelKpis = [
    {
        title: "Employee Headcount",
        value: personnelData.totalEmployees.toString(),
        subtitle: "Total employees",
        icon: Users,
        color: "cyan",
    },
    {
        title: "Pilot Headcount",
        value: personnelData.totalPilots.toString(),
        subtitle: `${pilotsPerPlane.toFixed(1)} per aircraft`,
        icon: Plane,
        color: "violet",
    },
    {
        title: "Revenue per Employee",
        value: `$${Math.round(revenuePerEmployee).toLocaleString()}`,
        subtitle: "TTM Run Rate / Avg Headcount",
        icon: DollarSign,
        color: "emerald",
    },
    {
        title: "Revenue per Pilot",
        value: `$${Math.round(revenuePerPilot).toLocaleString()}`,
        subtitle: "YTD",
        icon: DollarSign,
        color: "amber",
    },
]

const colorMap: Record<string, { bg: string; text: string }> = {
    cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400" },
    violet: { bg: "bg-violet-500/20", text: "text-violet-400" },
    emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
    amber: { bg: "bg-amber-500/20", text: "text-amber-400" },
    rose: { bg: "bg-rose-500/20", text: "text-rose-400" },
}

export function PersonnelPage() {
    return (
        <div className="space-y-6">
            {/* Top KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {personnelKpis.map((kpi) => (
                    <Card
                        key={kpi.title}
                        className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group"
                    >
                        <CardContent className="p-5">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                                    <p className="text-3xl font-bold tracking-tight text-foreground">{kpi.value}</p>
                                    <p className="text-xs text-muted-foreground">{kpi.subtitle}</p>
                                </div>
                                <div className={`rounded-xl p-3 ${colorMap[kpi.color].bg} group-hover:scale-110 transition-transform duration-300`}>
                                    <kpi.icon className={`h-5 w-5 ${colorMap[kpi.color].text}`} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Crewing Status and Attrition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* % Crewed Card */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <UserCheck className="h-5 w-5 text-cyan-400" />
                            <CardTitle className="text-base font-semibold">Crew Staffing Status</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Main percentage display */}
                        <div className="text-center">
                            <p className="text-6xl font-bold text-cyan-400">{crewedPercentage.toFixed(0)}%</p>
                            <p className="text-muted-foreground mt-2">Crewed</p>
                        </div>

                        {/* Progress bar */}
                        <div className="space-y-2">
                            <Progress value={crewedPercentage} className="h-3 bg-secondary" />
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">0%</span>
                                <span className="text-muted-foreground">100%</span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-foreground">{personnelData.totalPilots}</p>
                                <p className="text-xs text-muted-foreground">Pilots Staffed</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-foreground">{personnelData.pilotsNeeded}</p>
                                <p className="text-xs text-muted-foreground">Pilots Needed</p>
                            </div>
                            <div className="text-center">
                                <p className={`text-2xl font-bold ${personnelData.totalPilots >= personnelData.pilotsNeeded ? "text-emerald-400" : "text-amber-400"}`}>
                                    {personnelData.totalPilots >= personnelData.pilotsNeeded ? "+" : ""}{personnelData.totalPilots - personnelData.pilotsNeeded}
                                </p>
                                <p className="text-xs text-muted-foreground">Variance</p>
                            </div>
                        </div>

                        {/* Pilots per plane breakdown */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 mt-4">
                            <span className="text-sm text-muted-foreground">Pilots per Aircraft</span>
                            <span className="text-lg font-bold text-cyan-400">{pilotsPerPlane.toFixed(1)}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Pilot Attrition Rate Card */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <UserX className="h-5 w-5 text-rose-400" />
                            <CardTitle className="text-base font-semibold">Pilot Attrition</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-8">
                        <p className="text-6xl font-bold text-rose-400">{personnelData.pilotAttritionRate}%</p>
                        <p className="text-muted-foreground mt-2">Annual Attrition Rate</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
