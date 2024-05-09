import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const history = [
    {
      to: "Laika",
      Status: "In progress",
      totalAmount: "512.15 Doge",
      from: "Dogecoin",
      date: "01.01.24"
    },
    {
      to: "Laika",
      Status: "Sent",
      totalAmount: "512.15 Doge",
      from: "Dogecoin",
      date: "01.01.24"
    },
    {
      to: "Laika",
      Status: "Sent",
      totalAmount: "512.15 Doge",
      from: "Dogecoin",
      date: "01.01.24"
    }
  ]
  
  export function TableDemo() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Amount</TableHead>
            <TableHead className="">From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((item) => (
            <TableRow key={item.date} className="">
              <TableCell className="rounded-l-[5px]">{item.totalAmount}</TableCell>
              <TableCell>{item.from}</TableCell>
              <TableCell className="font-medium">{item.to}</TableCell>
              <TableCell className="font-medium">{item.date}</TableCell>
              <TableCell className="rounded-r-[5px]">{item.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  