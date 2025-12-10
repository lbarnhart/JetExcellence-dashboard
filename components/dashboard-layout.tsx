"use client"

import { DateProvider } from "@/lib/date-context"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <DateProvider>
            <main className="min-h-screen">
                {children}
            </main>
        </DateProvider>
    )
}
