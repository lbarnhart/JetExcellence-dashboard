"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { Plane, TrendingUp, TrendingDown, Fuel, DollarSign, Droplets } from "lucide-react"

// Fuel data (last 30 days)
const fuelData = {
  avgCostPerGallon: 5.42,
  totalGallonsPurchased: 18450,
  totalFuelSpend: 100000,
  monthlyRevenue: 842000,
}

const fuelSpendPercentage = (fuelData.totalFuelSpend / fuelData.monthlyRevenue) * 100

// Fuel efficiency data by aircraft
const fuelEfficiencyData = [
  { tail: "N123AB", aircraftType: "Citation X", gallonsPerHour: 248, costPerHour: 1344 },
  { tail: "N456CD", aircraftType: "Citation XLS+", gallonsPerHour: 185, costPerHour: 1003 },
  { tail: "N789EF", aircraftType: "Citation Latitude", gallonsPerHour: 210, costPerHour: 1138 },
  { tail: "N321GH", aircraftType: "Citation XLS+", gallonsPerHour: 192, costPerHour: 1041 },
  { tail: "N654IJ", aircraftType: "Citation Longitude", gallonsPerHour: 235, costPerHour: 1274 },
  { tail: "N987KL", aircraftType: "Citation X", gallonsPerHour: 255, costPerHour: 1382 },
  { tail: "N147MN", aircraftType: "Citation Latitude", gallonsPerHour: 205, costPerHour: 1111 },
]

// Calculate averages for comparison
const avgGallonsPerHour = fuelEfficiencyData.reduce((sum, a) => sum + a.gallonsPerHour, 0) / fuelEfficiencyData.length
const avgCostPerHour = fuelEfficiencyData.reduce((sum, a) => sum + a.costPerHour, 0) / fuelEfficiencyData.length

// Scatter plot data
const scatterData = fuelEfficiencyData.map((aircraft, idx) => ({
  x: aircraft.gallonsPerHour,
  y: aircraft.costPerHour,
  tail: aircraft.tail,
  type: aircraft.aircraftType,
}))

// Aircraft data with utilization metrics
const aircraftData = [
  { tail: "N123AB", utilizationRate: 92, flightHours: 124.5, flightDays: 22 },
  { tail: "N456CD", utilizationRate: 85, flightHours: 108.2, flightDays: 19 },
  { tail: "N789EF", utilizationRate: 78, flightHours: 96.8, flightDays: 17 },
  { tail: "N321GH", utilizationRate: 72, flightHours: 89.4, flightDays: 15 },
  { tail: "N654IJ", utilizationRate: 58, flightHours: 72.1, flightDays: 12 },
  { tail: "N987KL", utilizationRate: 45, flightHours: 56.3, flightDays: 9 },
  { tail: "N147MN", utilizationRate: 37, flightHours: 46.2, flightDays: 7 },
]

// Sort by flight days for top/bottom performers
const sortedByFlightDays = [...aircraftData].sort((a, b) => b.flightDays - a.flightDays)
const topPerformers = sortedByFlightDays.slice(0, 3)
const bottomPerformers = sortedByFlightDays.slice(-3).reverse()

export function PerformancePage() {
  return (
    <div className="space-y-6">
      {/* Fuel Metrics - Last 30 Days */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-500/20 ring-2 ring-cyan-500/30 p-3">
                <Fuel className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Avg Fuel Cost</p>
                <p className="text-2xl font-bold tracking-tight text-foreground">${fuelData.avgCostPerGallon.toFixed(2)}/gal</p>
              </div>
              <p className="text-xs text-muted-foreground self-end">Last 30 days</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-violet-500/20 ring-2 ring-violet-500/30 p-3">
                <Droplets className="h-5 w-5 text-violet-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Total Gallons Purchased</p>
                <p className="text-2xl font-bold tracking-tight text-foreground">{fuelData.totalGallonsPurchased.toLocaleString()}</p>
              </div>
              <p className="text-xs text-muted-foreground self-end">Last 30 days</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-amber-500/20 ring-2 ring-amber-500/30 p-3">
                <DollarSign className="h-5 w-5 text-amber-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Fuel Spend % of Revenue</p>
                <p className="text-2xl font-bold tracking-tight text-foreground">{fuelSpendPercentage.toFixed(1)}%</p>
              </div>
              <p className="text-xs text-muted-foreground self-end">${(fuelData.totalFuelSpend / 1000).toFixed(0)}K / ${(fuelData.monthlyRevenue / 1000).toFixed(0)}K</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top and Bottom Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 3 Performers */}
        <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/30">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-400" />
              <CardTitle className="text-base font-semibold">Top 3 Performers</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">By total flight days this month</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {topPerformers.map((aircraft, idx) => (
              <div
                key={aircraft.tail}
                className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-emerald-500/20"
              >
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-7 h-7 rounded-full flex items-center justify-center bg-emerald-500/20 text-emerald-400 border-emerald-500/30 font-bold"
                  >
                    {idx + 1}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono text-cyan-400">{aircraft.tail}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-emerald-400">{aircraft.flightDays} days</p>
                  <p className="text-xs text-muted-foreground">{aircraft.flightHours.toFixed(1)} hours</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bottom 3 Performers */}
        <Card className="bg-gradient-to-br from-rose-500/10 to-rose-500/5 border-rose-500/30">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-rose-400" />
              <CardTitle className="text-base font-semibold">Bottom 3 Performers</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Fewest flight days this month</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {bottomPerformers.map((aircraft, idx) => (
              <div
                key={aircraft.tail}
                className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-rose-500/20"
              >
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-7 h-7 rounded-full flex items-center justify-center bg-rose-500/20 text-rose-400 border-rose-500/30 font-bold"
                  >
                    {aircraftData.length - idx}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono text-cyan-400">{aircraft.tail}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-rose-400">{aircraft.flightDays} days</p>
                  <p className="text-xs text-muted-foreground">{aircraft.flightHours.toFixed(1)} hours</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Utilization Metrics Table */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Utilization Metrics by Tail</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Current month performance</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="text-muted-foreground">Tail Number</TableHead>
                <TableHead className="text-muted-foreground text-right">Utilization Rate</TableHead>
                <TableHead className="text-muted-foreground text-right">Total Flight Hours</TableHead>
                <TableHead className="text-muted-foreground text-right">Total Flight Days</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aircraftData.map((aircraft) => (
                <TableRow
                  key={aircraft.tail}
                  className="border-border/30 hover:bg-secondary/30 transition-colors"
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-muted-foreground" />
                      <span className="font-mono text-cyan-400">{aircraft.tail}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`font-bold ${aircraft.utilizationRate >= 70
                        ? "text-emerald-400"
                        : aircraft.utilizationRate >= 50
                          ? "text-amber-400"
                          : "text-rose-400"
                        }`}
                    >
                      {aircraft.utilizationRate}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono">{aircraft.flightHours.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-medium">{aircraft.flightDays}</TableCell>
                </TableRow>
              ))}
              {/* Totals Row */}
              <TableRow className="border-t-2 border-border/50 bg-secondary/20 font-medium">
                <TableCell>Fleet Total / Average</TableCell>
                <TableCell className="text-right">
                  <span className="font-bold text-cyan-400">
                    {Math.round(aircraftData.reduce((sum, a) => sum + a.utilizationRate, 0) / aircraftData.length)}%
                  </span>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {aircraftData.reduce((sum, a) => sum + a.flightHours, 0).toFixed(1)}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {aircraftData.reduce((sum, a) => sum + a.flightDays, 0)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Fuel Efficiency Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scatter Plot */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Fuel Efficiency by Aircraft</CardTitle>
            <p className="text-sm text-muted-foreground">Gallons/Hour vs Cost/Hour</p>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis
                    dataKey="x"
                    type="number"
                    name="Gallons/Hour"
                    domain={[150, 280]}
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                    label={{ value: "Gallons/Hour", position: "bottom", offset: -5, fontSize: 11, fill: "#71717a" }}
                  />
                  <YAxis
                    dataKey="y"
                    type="number"
                    name="$/Hour"
                    domain={[900, 1500]}
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(22, 22, 30, 0.95)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                    }}
                    formatter={(value: number, name: string) => [
                      name === "x" ? `${value} gal/hr` : `$${value}/hr`,
                      name === "x" ? "Gallons" : "Cost"
                    ]}
                    labelFormatter={(label, payload) => payload?.[0]?.payload?.tail || ""}
                  />
                  <ReferenceLine x={avgGallonsPerHour} stroke="#22d3ee" strokeDasharray="5 5" />
                  <ReferenceLine y={avgCostPerHour} stroke="#22d3ee" strokeDasharray="5 5" />
                  <Scatter name="Aircraft" data={scatterData} fill="#22d3ee" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-muted-foreground">
              <span>Dashed lines = Fleet Average</span>
            </div>
          </CardContent>
        </Card>

        {/* Fuel Efficiency Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-semibold">Fuel Efficiency by Tail</CardTitle>
            <p className="text-sm text-muted-foreground">Comparison to fleet average</p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-transparent">
                  <TableHead className="text-muted-foreground">Tail</TableHead>
                  <TableHead className="text-muted-foreground">Aircraft Type</TableHead>
                  <TableHead className="text-muted-foreground text-right">Gal/Hour</TableHead>
                  <TableHead className="text-muted-foreground text-right">$/Hour</TableHead>
                  <TableHead className="text-muted-foreground text-center">vs Avg</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fuelEfficiencyData.map((aircraft) => {
                  const vsAvg = ((aircraft.costPerHour - avgCostPerHour) / avgCostPerHour) * 100
                  const isAboveAvg = vsAvg > 0
                  return (
                    <TableRow key={aircraft.tail} className="border-border/30 hover:bg-secondary/30">
                      <TableCell className="font-mono text-cyan-400">{aircraft.tail}</TableCell>
                      <TableCell className="text-sm">{aircraft.aircraftType}</TableCell>
                      <TableCell className="text-right font-mono">{aircraft.gallonsPerHour}</TableCell>
                      <TableCell className="text-right font-mono">${aircraft.costPerHour.toLocaleString()}</TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="outline"
                          className={`text-xs ${isAboveAvg
                            ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            }`}
                        >
                          {isAboveAvg ? "+" : ""}{vsAvg.toFixed(1)}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  )
                })}
                <TableRow className="border-t-2 border-border/50 bg-secondary/20 font-medium">
                  <TableCell>Fleet Average</TableCell>
                  <TableCell className="text-sm text-muted-foreground">—</TableCell>
                  <TableCell className="text-right font-mono">{Math.round(avgGallonsPerHour)}</TableCell>
                  <TableCell className="text-right font-mono text-cyan-400">${Math.round(avgCostPerHour).toLocaleString()}</TableCell>
                  <TableCell className="text-center">—</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
