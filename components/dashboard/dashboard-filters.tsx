"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Calendar } from "lucide-react"
import { useDateRange, DatePreset } from "@/lib/date-context"

interface DashboardFiltersProps {
  activeTab: string
}

const timeOptions: { value: DatePreset; label: string }[] = [
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
  { value: "mtd", label: "Month to Date" },
  { value: "qtd", label: "Quarter to Date" },
  { value: "ytd", label: "Year to Date" },
]

export function DashboardFilters({ activeTab }: DashboardFiltersProps) {
  const { dateRange, setPreset } = useDateRange()

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Filter className="h-4 w-4" />
        <span className="text-sm font-medium">Filters</span>
      </div>
      <Select value={dateRange.preset} onValueChange={(value) => setPreset(value as DatePreset)}>
        <SelectTrigger className="w-auto min-w-[140px] bg-secondary/50 border-border/50 hover:bg-secondary/80 transition-colors">
          <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {timeOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FilterSelect defaultValue="all" options={companyOptions} />
      <FilterSelect defaultValue="all" options={customerOptions} />
      <FilterSelect defaultValue="all" options={aircraftOptions} />
    </div>
  )
}

function FilterSelect({
  defaultValue,
  options,
}: {
  defaultValue: string
  options: { value: string; label: string }[]
}) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-auto min-w-[140px] bg-secondary/50 border-border/50 hover:bg-secondary/80 transition-colors">
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
  )
}



const companyOptions = [
  { value: "all", label: "All Companies" },
  { value: "bellair", label: "BellAir" },
  { value: "redwing", label: "RedWing Aviation" },
]

const customerOptions = [
  { value: "all", label: "All Customers" },
  { value: "wholesale", label: "Wholesale" },
  { value: "retail", label: "Retail" },
]

const aircraftOptions = [
  { value: "all", label: "All Aircraft" },
  { value: "citation-x", label: "Citation X" },
  { value: "gulfstream", label: "Gulfstream G650" },
  { value: "challenger", label: "Challenger 350" },
]
