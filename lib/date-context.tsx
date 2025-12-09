"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

export type DatePreset = "7d" | "30d" | "mtd" | "qtd" | "ytd" | "custom"

interface DateRange {
    startDate: Date
    endDate: Date
    preset: DatePreset
}

interface DateContextType {
    dateRange: DateRange
    setDateRange: (range: DateRange) => void
    setPreset: (preset: DatePreset) => void
}

const DateContext = createContext<DateContextType | undefined>(undefined)

function getPresetDates(preset: DatePreset): { startDate: Date; endDate: Date } {
    const now = new Date()
    const endDate = new Date(now)
    let startDate = new Date(now)

    switch (preset) {
        case "7d":
            startDate.setDate(now.getDate() - 7)
            break
        case "30d":
            startDate.setDate(now.getDate() - 30)
            break
        case "mtd":
            startDate = new Date(now.getFullYear(), now.getMonth(), 1)
            break
        case "qtd":
            const quarter = Math.floor(now.getMonth() / 3)
            startDate = new Date(now.getFullYear(), quarter * 3, 1)
            break
        case "ytd":
            startDate = new Date(now.getFullYear(), 0, 1)
            break
        default:
            startDate.setDate(now.getDate() - 30)
    }

    return { startDate, endDate }
}

export function DateProvider({ children }: { children: ReactNode }) {
    const [dateRange, setDateRange] = useState<DateRange>(() => {
        const { startDate, endDate } = getPresetDates("30d")
        return { startDate, endDate, preset: "30d" }
    })

    const setPreset = (preset: DatePreset) => {
        const { startDate, endDate } = getPresetDates(preset)
        setDateRange({ startDate, endDate, preset })
    }

    return (
        <DateContext.Provider value={{ dateRange, setDateRange, setPreset }}>
            {children}
        </DateContext.Provider>
    )
}

export function useDateRange() {
    const context = useContext(DateContext)
    if (context === undefined) {
        throw new Error("useDateRange must be used within a DateProvider")
    }
    return context
}
