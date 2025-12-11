import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"

const revenueKpis = [
  {
    title: "Weekly Revenue",
    value: "$842,000",
    change: "+8.3%",
    changeType: "positive" as const,
    subtitle: "Last 7 Days",
  },
  {
    title: "MTD Revenue",
    value: "$2.4M",
    change: "+11.2%",
    changeType: "positive" as const,
    subtitle: "vs. Last Month",
  },
  {
    title: "YTD Revenue",
    value: "$12.8M",
    change: "+12.5%",
    changeType: "positive" as const,
    subtitle: "vs. Last Year",
  },
]

export function PrimaryKPIs() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {revenueKpis.map((kpi) => (
          <Card
            key={kpi.title}
            className="relative overflow-hidden bg-emerald-500/10 backdrop-blur-sm border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 opacity-50" />
            <CardContent className="relative p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-emerald-300">{kpi.title}</p>
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
                <div className="rounded-xl bg-emerald-500/20 p-3 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-5 w-5 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
