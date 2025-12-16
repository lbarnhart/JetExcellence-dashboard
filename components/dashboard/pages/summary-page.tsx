import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MonthlyRevenueChart } from "@/components/dashboard/monthly-revenue-chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function SummaryPage() {
  const metrics = [
    {
      label: "Revenue",
      wtd: 4451591,
      wtdTarget: 4200000,
      mtd: 7219384,
      ytd: 24533007,
      ytdTarget: 28000000,
      format: "currency",
      highlight: true,
    },
    {
      label: "Total Flight Hrs",
      wtd: 531.1,
      wtdTarget: 500,
      mtd: 1082.2,
      ytd: 3491.3,
      ytdTarget: 3800,
      format: "decimal",
    },
    {
      label: "Live Flight Hrs",
      wtd: 497.1,
      wtdTarget: 475,
      mtd: 1004.5,
      ytd: 3171.3,
      ytdTarget: 3500,
      format: "decimal",
    },
    {
      label: "All in Hourly Rate",
      wtd: 8955,
      wtdTarget: 8500,
      mtd: 7187,
      ytd: 7736,
      ytdTarget: 8200,
      format: "currency",
    },
    {
      label: "Live Rate (w/o GRP)",
      wtd: null,
      wtdTarget: 85,
      mtd: null,
      ytd: null,
      ytdTarget: 85,
      format: "percent",
    },
    {
      label: "Fleet Efficiency",
      wtd: 93.6,
      wtdTarget: 90,
      mtd: 92.8,
      ytd: 90.8,
      ytdTarget: 92,
      format: "percent",
    },
    {
      label: "Completion Rate",
      wtd: null,
      wtdTarget: 95,
      mtd: null,
      ytd: null,
      ytdTarget: 95,
      format: "percent",
    },
    {
      label: "Active Customers",
      wtd: 57,
      wtdTarget: 50,
      mtd: 98,
      ytd: 199,
      ytdTarget: 220,
      format: "number",
    },
  ]

  const formatValue = (value: number | null, format: string) => {
    if (value === null) return "-"
    switch (format) {
      case "currency":
        return `$${value.toLocaleString()}`
      case "percent":
        return `${value}%`
      case "decimal":
        return value.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      default:
        return value.toLocaleString()
    }
  }

  const getColorClass = (actual: number | null, target: number | null) => {
    if (actual === null || target === null) return ""
    return actual >= target ? "text-emerald-400" : "text-red-400"
  }

  return (
    <div className="space-y-6">
      {/* Metrics Comparison Table with Targets */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Key Metrics vs Targets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="text-muted-foreground font-semibold">Metric</TableHead>
                <TableHead className="text-right text-muted-foreground font-semibold">WTD</TableHead>
                <TableHead className="text-right text-muted-foreground font-semibold">WTD Target</TableHead>
                <TableHead className="text-right text-muted-foreground font-semibold">MTD</TableHead>
                <TableHead className="text-right text-muted-foreground font-semibold">YTD</TableHead>
                <TableHead className="text-right text-muted-foreground font-semibold">YTD Target</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metrics.map((metric, i) => {
                const wtdColorClass = getColorClass(metric.wtd, metric.wtdTarget)
                const ytdColorClass = getColorClass(metric.ytd, metric.ytdTarget)

                return (
                  <TableRow
                    key={i}
                    className={`border-border/50 hover:bg-secondary/30 ${
                      metric.highlight ? "bg-emerald-950/30 hover:bg-emerald-950/40" : ""
                    }`}
                  >
                    <TableCell
                      className={`font-medium ${
                        metric.highlight ? "text-emerald-400 font-semibold" : "text-foreground"
                      }`}
                    >
                      {metric.label}
                    </TableCell>

                    {/* WTD Actual - color coded based on target */}
                    <TableCell
                      className={`text-right font-semibold ${
                        metric.highlight ? "text-emerald-400" : wtdColorClass || "text-foreground"
                      }`}
                    >
                      {formatValue(metric.wtd, metric.format)}
                    </TableCell>

                    {/* WTD Target */}
                    <TableCell className="text-right text-muted-foreground">
                      {formatValue(metric.wtdTarget, metric.format)}
                    </TableCell>

                    {/* MTD Actual */}
                    <TableCell
                      className={`text-right ${
                        metric.highlight ? "text-emerald-400 font-semibold" : "text-foreground"
                      }`}
                    >
                      {formatValue(metric.mtd, metric.format)}
                    </TableCell>

                    {/* YTD Actual - color coded based on target */}
                    <TableCell
                      className={`text-right font-semibold ${
                        metric.highlight ? "text-emerald-400" : ytdColorClass || "text-foreground"
                      }`}
                    >
                      {formatValue(metric.ytd, metric.format)}
                    </TableCell>

                    {/* YTD Target */}
                    <TableCell className="text-right text-muted-foreground">
                      {formatValue(metric.ytdTarget, metric.format)}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Monthly Revenue Chart at Bottom */}
      <MonthlyRevenueChart />
    </div>
  )
}
