import { Card, CardContent } from "@/components/ui/card"
import { Percent, CheckCircle, Radio } from "lucide-react"

const secondaryKpis = [
  {
    title: "Yield",
    value: "78.4%",
    subtitle: "Last 7 days",
    icon: Percent,
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    ring: "ring-cyan-500/30",
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
    title: "Live Rate",
    value: "86.7%",
    subtitle: "Last 7 days",
    icon: Radio,
    color: "text-amber-400",
    bg: "bg-amber-500/20",
    ring: "ring-amber-500/30",
  },
]

export function SecondaryKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {secondaryKpis.map((kpi) => (
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
