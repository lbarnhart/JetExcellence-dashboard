"use client"

import { Plane, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const tabs = [
  { id: "summary", label: "Summary" },
  { id: "revenue", label: "Revenue" },
  { id: "commercial", label: "Commercial" },
  { id: "utilization", label: "Utilization" },
  { id: "fleet-analytics", label: "Fleet Analytics" },
  { id: "personnel", label: "Personnel" },
]

interface DashboardNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function DashboardNav({ activeTab, setActiveTab }: DashboardNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-[1800px] h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full" />
            <div className="relative bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg p-2">
              <Plane className="h-5 w-5 text-background" />
            </div>
          </div>
          <h1 className="text-lg font-semibold tracking-tight text-foreground">Jet Excellence</h1>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-secondary/50 rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/10"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Updated {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
          </div>

          <Avatar className="h-9 w-9 border-2 border-border/50">
            <AvatarImage src="/executive-avatar.png" />
            <AvatarFallback className="bg-secondary">
              <User className="h-4 w-4 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}
