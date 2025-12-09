"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

export function DashboardFilters() {
  return (
    <div className="flex flex-wrap items-end gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="flex items-center gap-2 text-muted-foreground mr-2">
        <Filter className="h-4 w-4" />
        <span className="text-sm font-medium">Filters</span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-muted-foreground">Time Period</label>
        <Select defaultValue="ytd">
          <SelectTrigger className="w-[140px] bg-secondary/50 border-border/50 hover:bg-secondary/80 transition-colors">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ytd">YTD</SelectItem>
            <SelectItem value="ltm">LTM</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="last-7-days">Last 7 Days</SelectItem>
            <SelectItem value="last-30-days">Last 30 Days</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-muted-foreground">Company</label>
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px] bg-secondary/50 border-border/50 hover:bg-secondary/80 transition-colors">
            <SelectValue placeholder="Select company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Companies</SelectItem>
            <SelectItem value="acme">Acme Aviation</SelectItem>
            <SelectItem value="skyline">Skyline Jets</SelectItem>
            <SelectItem value="premier">Premier Air</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-muted-foreground">Customer</label>
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px] bg-secondary/50 border-border/50 hover:bg-secondary/80 transition-colors">
            <SelectValue placeholder="Select customer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Customers</SelectItem>
            <SelectItem value="enterprise">Enterprise</SelectItem>
            <SelectItem value="individual">Individual</SelectItem>
            <SelectItem value="charter">Charter Groups</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-muted-foreground">Aircraft Type</label>
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px] bg-secondary/50 border-border/50 hover:bg-secondary/80 transition-colors">
            <SelectValue placeholder="Select aircraft" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Aircraft</SelectItem>
            <SelectItem value="citation-x">Citation X</SelectItem>
            <SelectItem value="gulfstream">Gulfstream G650</SelectItem>
            <SelectItem value="challenger">Challenger 350</SelectItem>
            <SelectItem value="phenom">Phenom 300</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
