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
        from: "0x6c139AA...",
        totalAmount: "$1,500",
    },
    {
        from: "0x6c139AA...",
        totalAmount: "$1,100.5",
    },
    {
        from: "0x6c139AA...",
        totalAmount: "$800",
    },
]
const TableGuidUser = () => {
    return (
        <Table className="text-white">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-left">Address</TableHead>
                    <TableHead className="text-right">Bridged Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {history.map((item) => (
                    <TableRow key={item.date} className="">
                        <TableCell className="rounded-l-[5px] text-left custom_text">{item.from}</TableCell>
                        <TableCell className="font-medium text-right rounded-r-[5px]">{item.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TableGuidUser