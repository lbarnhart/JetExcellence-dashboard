"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"

interface Aircraft {
  id: number
  yearModel: number
  tailNumber: string
  certificate: "RWA" | "BellAir"
  status?: string
  aircraftType?: string
  cabinType?: string
}

const fleetData: Aircraft[] = [
  // RWA Aircraft
  { id: 1, yearModel: 1997, tailNumber: "N716XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 2, yearModel: 2003, tailNumber: "N717XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 3, yearModel: 2002, tailNumber: "N719XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 4, yearModel: 2003, tailNumber: "N720XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 5, yearModel: 2004, tailNumber: "N726XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 6, yearModel: 2005, tailNumber: "N747XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 7, yearModel: 2001, tailNumber: "N751XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 8, yearModel: 1998, tailNumber: "N753XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 9, yearModel: 2006, tailNumber: "N760XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 10, yearModel: 2006, tailNumber: "N764XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 11, yearModel: 2006, tailNumber: "N765XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 12, yearModel: 2007, tailNumber: "N772XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 13, yearModel: 2007, tailNumber: "N774XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 14, yearModel: 2007, tailNumber: "N780XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 15, yearModel: 2008, tailNumber: "N782XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 16, yearModel: 1999, tailNumber: "N784XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 17, yearModel: 1999, tailNumber: "N790XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 18, yearModel: 1999, tailNumber: "N793XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 19, yearModel: 2008, tailNumber: "N794XJ", certificate: "RWA", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },

  // BellAir Aircraft
  { id: 20, yearModel: 1998, tailNumber: "N621FP", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 21, yearModel: 2000, tailNumber: "N577JC", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 22, yearModel: 1997, tailNumber: "N808GG", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 23, yearModel: 1999, tailNumber: "N100MA", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 24, yearModel: 2003, tailNumber: "N399LF", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 25, yearModel: 2002, tailNumber: "N946TX", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 26, yearModel: 2003, tailNumber: "N118DL", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 27, yearModel: 2003, tailNumber: "N808MC", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 28, yearModel: 2004, tailNumber: "N804MC", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 29, yearModel: 1996, tailNumber: "N140MC", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 30, yearModel: 2004, tailNumber: "N560CB", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 31, yearModel: 2007, tailNumber: "N769XJ", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 32, yearModel: 2007, tailNumber: "N190MC", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 33, yearModel: 2001, tailNumber: "N440WP", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
  { id: 34, yearModel: 2001, tailNumber: "N560MC", certificate: "BellAir", aircraftType: "Cessna Citation X", cabinType: "Super Midsize" },
]

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-background p-6 lg:p-8">
      <div className="mx-auto max-w-[1800px] space-y-6">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Fleet Management</h1>
          <p className="text-muted-foreground">
            Overview of all aircraft in the JetExcellence fleet
          </p>
        </div>

        {/* Fleet Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Aircraft</p>
              <p className="text-2xl font-bold">{fleetData.length}</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">RWA Certificate</p>
              <p className="text-2xl font-bold">
                {fleetData.filter(a => a.certificate === "RWA").length}
              </p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">BellAir Certificate</p>
              <p className="text-2xl font-bold">
                {fleetData.filter(a => a.certificate === "BellAir").length}
              </p>
            </div>
          </Card>
        </div>

        {/* Fleet Table */}
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Aircraft List</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tail Number</TableHead>
                  <TableHead>Certificate</TableHead>
                  <TableHead>Year Model</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Aircraft Type</TableHead>
                  <TableHead>Cabin Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fleetData.map((aircraft) => (
                  <TableRow key={aircraft.id}>
                    <TableCell className="font-mono font-semibold">
                      {aircraft.tailNumber}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${aircraft.certificate === "RWA"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                          }`}
                      >
                        {aircraft.certificate}
                      </span>
                    </TableCell>
                    <TableCell>{aircraft.yearModel}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {aircraft.status || "—"}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {aircraft.aircraftType || "—"}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {aircraft.cabinType || "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  )
}
