import { ArrowUpRight, ArrowDownRight } from "lucide-react"

type StatCardProps = {
    title: string,
    value: string,
    change: string
}

export default function StatCard({title, value, change}: StatCardProps) {
    const isPositive = change.startsWith('+');
    const Icon = isPositive ? ArrowUpRight : ArrowDownRight;

    return (
        <div className="border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 dark:text-white hover:shadow-md transition">
            <h3 className="text-lg font-medium">{title}</h3> 
            <p className="text-2xl font-bold">{value}</p> 
            <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                <Icon className='w-4 h-4' />
                {change}
            </p>
        </div>
    )
}