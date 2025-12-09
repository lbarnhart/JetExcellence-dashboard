"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

interface DashboardFiltersProps {
  activeTab: string
}

export function DashboardFilters({ activeTab }: DashboardFiltersProps) {
  return (
    <div className="flex flex-wrap items-end gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="flex items-center gap-2 text-muted-foreground mr-2">
        <Filter className="h-4 w-4" />
        <span className="text-sm font-medium">Filters</span>
      </div>
      <FilterSelect label="Time Period" defaultValue="ytd" options={timeOptions} />
      <FilterSelect label="Company" defaultValue="all" options={companyOptions} />
      <FilterSelect label="Customer" defaultValue="all" options={customerOptions} />
      <FilterSelect label="Aircraft Type" defaultValue="all" options={aircraftOptions} />
    </div>
  )
}

function FilterSelect({
  label,
  defaultValue,
  options,
}: {
  label: string
  defaultValue: string
  options: { value: string; label: string }[]
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-[140px] bg-secondary/50 border-border/50 hover:bg-secondary/80 transition-colors">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

const timeOptions = [
  { value: "ytd", label: "YTD" },
  { value: "ltm", label: "LTM" },
  { value: "mtd", label: "MTD" },
  { value: "last-7", label: "Last 7 Days" },
  { value: "last-30", label: "Last 30 Days" },
  { value: "custom", label: "Custom" },
]

const companyOptions = [
  { value: "all", label: "All Companies" },
  { value: "bellair", label: "BellAir" },
  { value: "skyline", label: "Skyline Jets" },
]

const customerOptions = [
  { value: "all", label: "All Customers" },
  { value: "enterprise", label: "Enterprise" },
  { value: "individual", label: "Individual" },
]

const aircraftOptions = [
  { value: "all", label: "All Aircraft" },
  { value: "citation-x", label: "Citation X" },
  { value: "gulfstream", label: "Gulfstream G650" },
  { value: "challenger", label: "Challenger 350" },
]
