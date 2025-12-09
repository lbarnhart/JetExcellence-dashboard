import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, FileText, TrendingUp, Plane, ArrowUpRight, ArrowDownRight } from "lucide-react"

const primaryKpis = [
  {
    title: "YTD Revenue",
    value: "$12.8M",
    change: "+12.5%",
    changeType: "positive" as const,
    subtitle: "vs. Last Year",
    icon: DollarSign,
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    title: "Quotes",
    value: "284",
    change: "+8.2%",
    changeType: "positive" as const,
    subtitle: "Last 30 days",
    icon: FileText,
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Avg Quote Value",
    value: "$45.2K",
    change: "-2.1%",
    changeType: "negative" as const,
    subtitle: "vs. Last Month",
    icon: TrendingUp,
    gradient: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Flight Hours",
    value: "1,842",
    change: "+15.3%",
    changeType: "positive" as const,
    subtitle: "Current Month",
    icon: Plane,
    gradient: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
]

export function PrimaryKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {primaryKpis.map((kpi) => (
        <Card
          key={kpi.title}
          className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${kpi.gradient} opacity-50`} />
          <CardContent className="relative p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                <p className="text-3xl font-bold tracking-tight text-foreground">{kpi.value}</p>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-sm font-medium px-2 py-0.5 rounded-full ${
                      kpi.changeType === "positive"
                        ? "text-emerald-400 bg-emerald-500/10"
                        : "text-rose-400 bg-rose-500/10"
                    }`}
                  >
                    {kpi.changeType === "positive" ? (
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowDownRight className="h-3.5 w-3.5" />
                    )}
                    {kpi.change}
                  </span>
                  <span className="text-xs text-muted-foreground">{kpi.subtitle}</span>
                </div>
              </div>
              <div className={`rounded-xl ${kpi.iconBg} p-3 group-hover:scale-110 transition-transform duration-300`}>
                <kpi.icon className={`h-5 w-5 ${kpi.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
