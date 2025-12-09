import { Card } from "@/components/ui/card"
import { BarChart3, Clock } from "lucide-react"

export default function ReportsPage() {
    return (
        <div className="min-h-screen bg-background p-6 lg:p-8">
            <div className="mx-auto max-w-[1800px] space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
                    <p className="text-muted-foreground">
                        Generate and view detailed business reports
                    </p>
                </div>

                <Card className="p-12 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                        <Clock className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
                    <p className="text-muted-foreground max-w-md">
                        We're building powerful reporting tools to help you analyze your business.
                        Check back soon for updates!
                    </p>
                </Card>
            </div>
        </div>
    )
}
