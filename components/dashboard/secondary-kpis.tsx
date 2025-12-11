import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, DollarSign, Fuel } from "lucide-react"

const secondaryKpis = [
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
    value: "$4,285",
    subtitle: "Includes GRP",
    icon: DollarSign,
    color: "text-amber-400",
    bg: "bg-amber-500/20",
    ring: "ring-amber-500/30",
  },
  {
    title: "Avg Fuel Cost / Gallon",
    value: "$5.42",
    subtitle: "Last 30 days",
    icon: Fuel,
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    ring: "ring-cyan-500/30",
  },
  {
    title: "Fuel Cost / Hour",
    value: "$892",
    subtitle: "Last 30 days",
    icon: Fuel,
    color: "text-violet-400",
    bg: "bg-violet-500/20",
    ring: "ring-violet-500/30",
  },
]

export function SecondaryKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
