"use client"

import { useState } from "react"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { DashboardFilters } from "@/components/dashboard/dashboard-filters"
import { SummaryPage } from "@/components/dashboard/pages/summary-page"
import { UtilizationPage } from "@/components/dashboard/pages/utilization-page"
import { QuotingPage } from "@/components/dashboard/pages/quoting-page"
import { RevenuePage } from "@/components/dashboard/pages/revenue-page"
import { PerformancePage } from "@/components/dashboard/pages/performance-page"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("summary")

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="pt-16">
        <div className="mx-auto max-w-[1800px] p-6 lg:p-8 space-y-6">
          {/* Filters */}
          <DashboardFilters activeTab={activeTab} />

          {/* Page Content */}
          {activeTab === "summary" && <SummaryPage />}
          {activeTab === "utilization" && <UtilizationPage />}
          {activeTab === "quoting" && <QuotingPage />}
          {activeTab === "revenue" && <RevenuePage />}
          {activeTab === "performance" && <PerformancePage />}
        </div>
      </div>
    </div>
  )
}
