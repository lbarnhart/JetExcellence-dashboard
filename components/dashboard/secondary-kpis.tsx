import { Card, CardContent } from "@/components/ui/card"
import { Plane, Gauge, CheckCircle, DollarSign, TrendingUp, Users } from "lucide-react"

const operationalKpis = [
  {
    title: "Total Flight Hours",
    value: "1,842",
    subtitle: "Year to Date",
    icon: Plane,
    color: "text-violet-400",
    bg: "bg-violet-500/20",
    ring: "ring-violet-500/30",
  },
  {
    title: "Live Flight Hours",
    value: "1,592",
    subtitle: "YTD (Excludes Repo)",
    icon: Plane,
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    ring: "ring-cyan-500/30",
  },
  {
    title: "Fleet Efficiency",
    value: "78.4%",
    subtitle: "Current Month",
    icon: Gauge,
    color: "text-amber-400",
    bg: "bg-amber-500/20",
    ring: "ring-amber-500/30",
  },
  {
    title: "Completion Rate",
    value: "94.2%",
    subtitle: "Last 30 days",
    icon: CheckCircle,
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
    ring: "ring-emerald-500/30",
  },
  {
    title: "Live Rate (w/o GRP)",
    value: "$4,285",
    subtitle: "Per Flight Hour",
    icon: DollarSign,
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    ring: "ring-cyan-500/30",
  },
  {
    title: "Yield",
    value: "82.3%",
    subtitle: "Revenue Efficiency",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
    ring: "ring-emerald-500/30",
  },
  {
    title: "Rev per Flight Hour",
    value: "$6,950",
    subtitle: "Avg. YTD",
    icon: DollarSign,
    color: "text-violet-400",
    bg: "bg-violet-500/20",
    ring: "ring-violet-500/30",
  },
  {
    title: "Active Customers",
    value: "127",
    change: "+8",
    subtitle: "vs. Last Month",
    icon: Users,
    color: "text-amber-400",
    bg: "bg-amber-500/20",
    ring: "ring-amber-500/30",
  },
]

export function SecondaryKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {operationalKpis.map((kpi) => (
        <Card
          key={kpi.title}
          className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300"
        >
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className={`rounded-xl ${kpi.bg} ring-2 ${kpi.ring} p-3`}>
                <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                <p className="text-2xl font-bold tracking-tight text-foreground">{kpi.value}</p>
              </div>
              <p className="text-xs text-muted-foreground self-end">{kpi.subtitle}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
