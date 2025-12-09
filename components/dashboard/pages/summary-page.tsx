import { PrimaryKPIs } from "@/components/dashboard/primary-kpis"
import { SecondaryKPIs } from "@/components/dashboard/secondary-kpis"
import { FleetUtilizationChart } from "@/components/dashboard/fleet-utilization-chart"
import { MonthlyRevenueChart } from "@/components/dashboard/monthly-revenue-chart"
import { TopCustomersTable } from "@/components/dashboard/top-customers-table"
import { RevenueByCabinChart } from "@/components/dashboard/revenue-by-cabin-chart"

export function SummaryPage() {
  return (
    <div className="space-y-6">
      <PrimaryKPIs />
      <SecondaryKPIs />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FleetUtilizationChart />
        <MonthlyRevenueChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopCustomersTable />
        <RevenueByCabinChart />
      </div>
    </div>
  )
}
