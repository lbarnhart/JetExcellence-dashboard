"use client"

import { Sidebar } from "@/components/sidebar"
import { DateProvider } from "@/lib/date-context"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <DateProvider>
            <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex-1 ml-64 transition-all duration-300">
                    {children}
                </main>
            </div>
        </DateProvider>
    )
}
