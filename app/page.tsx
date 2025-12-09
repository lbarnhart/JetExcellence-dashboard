import { DashboardFilters } from "@/components/dashboard/dashboard-filters"
import { PrimaryKPIs } from "@/components/dashboard/primary-kpis"
import { SecondaryKPIs } from "@/components/dashboard/secondary-kpis"
import { FleetUtilizationChart } from "@/components/dashboard/fleet-utilization-chart"
import { MonthlyRevenueChart } from "@/components/dashboard/monthly-revenue-chart"
import { TopCustomersTable } from "@/components/dashboard/top-customers-table"
import { RevenueByCabinChart } from "@/components/dashboard/revenue-by-cabin-chart"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1600px] p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Executive Dashboard</h1>
            <p className="text-muted-foreground mt-1">Overview of key performance metrics</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live</span>
            <span className="text-border">|</span>
            <span>
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        {/* Filters */}
        <DashboardFilters />

        {/* Primary KPIs */}
        <PrimaryKPIs />

        {/* Secondary KPIs */}
        <SecondaryKPIs />

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FleetUtilizationChart />
          <MonthlyRevenueChart />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopCustomersTable />
          <RevenueByCabinChart />
        </div>
      </div>
    </div>
  )
}
