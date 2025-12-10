import { PrimaryKPIs } from "@/components/dashboard/primary-kpis"
import { SecondaryKPIs } from "@/components/dashboard/secondary-kpis"
import { MonthlyRevenueChart } from "@/components/dashboard/monthly-revenue-chart"

export function SummaryPage() {
  return (
    <div className="space-y-6">
      <PrimaryKPIs />
      <SecondaryKPIs />
      <MonthlyRevenueChart />
    </div>
  )
}

