"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Plane,
    Users,
    FileText,
    BarChart3,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { GlobalDatePicker } from "./global-date-picker"

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Fleet", href: "/fleet", icon: Plane },
    { name: "Customers", href: "/customers", icon: Users },
    { name: "Reports", href: "/reports", icon: BarChart3 },
]

export function Sidebar() {
    const [collapsed, setCollapsed] = useState(false)
    const pathname = usePathname()

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
                collapsed ? "w-16" : "w-64"
            )}
        >
            {/* Logo Section */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
                {!collapsed && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                            <Plane className="w-5 h-5 text-white -rotate-45" />
                        </div>
                        <span className="font-semibold text-sidebar-foreground tracking-tight">
                            JetExcellence
                        </span>
                    </div>
                )}
                {collapsed && (
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto">
                        <Plane className="w-5 h-5 text-white -rotate-45" />
                    </div>
                )}
            </div>

            {/* Date Picker */}
            <div className="px-3 py-3 border-b border-sidebar-border">
                <GlobalDatePicker collapsed={collapsed} />
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                                collapsed && "justify-center px-2"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-cyan-400")} />
                            {!collapsed && <span>{item.name}</span>}
                        </Link>
                    )
                })}
            </nav>

            {/* Collapse Toggle */}
            <div className="p-3 border-t border-sidebar-border">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors"
                >
                    {collapsed ? (
                        <ChevronRight className="h-5 w-5" />
                    ) : (
                        <>
                            <ChevronLeft className="h-5 w-5" />
                            <span>Collapse</span>
                        </>
                    )}
                </button>
            </div>
        </aside>
    )
}
