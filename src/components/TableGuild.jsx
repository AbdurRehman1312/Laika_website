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
        to: "42/42",
        totalAmount: "Solana Lover",
        from: "Hold 10+ $SOL",
        date: "$120,000"
    },
    {
        to: "39/42",
        totalAmount: "WIF Puppy",
        from: "Hold 100+ $WIF",
        date: "$50,000"
    },
    {
        to: "01.01.24",
        totalAmount: "Dog Believer",
        from: "No Conditions",
        date: "$15,000"
    },
]

export function TableGuild() {
    return (
        <Table className="text-white">
            <TableHeader>
                <TableRow>
                    <TableHead className="">Name</TableHead>
                    <TableHead className="">Conditions</TableHead>
                    <TableHead>Members</TableHead>
                    <TableHead>Total Bridged</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {history.map((item) => (
                    <TableRow key={item.date} className="">
                        <TableCell className="rounded-l-[5px]">{item.totalAmount}</TableCell>
                        <TableCell className="text-dimGrey">{item.from}</TableCell>
                        <TableCell className="font-medium">{item.to}</TableCell>
                        <TableCell className="font-medium rounded-r-[5px]">{item.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
