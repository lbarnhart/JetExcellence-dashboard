"use client"

import { useDateRange, DatePreset } from "@/lib/date-context"
import { Calendar, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const presetOptions: { label: string; value: DatePreset }[] = [
    { label: "Last 7 Days", value: "7d" },
    { label: "Last 30 Days", value: "30d" },
    { label: "Month to Date", value: "mtd" },
    { label: "Quarter to Date", value: "qtd" },
    { label: "Year to Date", value: "ytd" },
]

interface GlobalDatePickerProps {
    collapsed?: boolean
}

export function GlobalDatePicker({ collapsed = false }: GlobalDatePickerProps) {
    const { dateRange, setPreset } = useDateRange()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const currentLabel = presetOptions.find((p) => p.value === dateRange.preset)?.label || "Custom"

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    if (collapsed) {
        return (
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-center p-2 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent/50 transition-colors"
                title={currentLabel}
            >
                <Calendar className="h-5 w-5" />
            </button>
        )
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-sidebar-accent/30 border border-sidebar-border hover:bg-sidebar-accent/50 transition-colors"
            >
                <Calendar className="h-4 w-4 text-cyan-400" />
                <span className="flex-1 text-left text-sidebar-foreground">{currentLabel}</span>
                <ChevronDown className={cn("h-4 w-4 text-sidebar-foreground/50 transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="absolute left-0 right-0 mt-1 py-1 bg-popover border border-border rounded-lg shadow-lg z-50">
                    {presetOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                setPreset(option.value)
                                setIsOpen(false)
                            }}
                            className={cn(
                                "w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors",
                                dateRange.preset === option.value
                                    ? "text-cyan-400 bg-accent/50"
                                    : "text-popover-foreground"
                            )}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
