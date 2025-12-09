import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const customers = [
  { rank: 1, name: "Apex Industries", revenue: 1847320, percentage: 14.4 },
  { rank: 2, name: "GlobalTech Corp", revenue: 1523890, percentage: 11.9 },
  { rank: 3, name: "Summit Holdings", revenue: 1298450, percentage: 10.1 },
  { rank: 4, name: "Pinnacle Group", revenue: 1156780, percentage: 9.0 },
  { rank: 5, name: "Horizon Ventures", revenue: 987650, percentage: 7.7 },
  { rank: 6, name: "Atlas Partners", revenue: 876540, percentage: 6.8 },
  { rank: 7, name: "Meridian Capital", revenue: 765430, percentage: 6.0 },
  { rank: 8, name: "Vertex Solutions", revenue: 654320, percentage: 5.1 },
  { rank: 9, name: "Nexus Dynamics", revenue: 543210, percentage: 4.2 },
  { rank: 10, name: "Sterling Enterprises", revenue: 432100, percentage: 3.4 },
]

export function TopCustomersTable() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Top 10 Customers</CardTitle>
        <p className="text-sm text-muted-foreground">By revenue contribution</p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="w-[50px] text-muted-foreground">#</TableHead>
              <TableHead className="text-muted-foreground">Customer</TableHead>
              <TableHead className="text-right text-muted-foreground">Revenue</TableHead>
              <TableHead className="text-right w-[80px] text-muted-foreground">Share</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.rank} className="border-border/30 hover:bg-secondary/30 transition-colors">
                <TableCell className="font-medium text-muted-foreground">{customer.rank}</TableCell>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell className="text-right font-mono text-sm">${customer.revenue.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-cyan-400">
                    {customer.percentage}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
