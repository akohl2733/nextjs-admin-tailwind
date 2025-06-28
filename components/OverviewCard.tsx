import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type OverviewCardProps = {
    title: string;
    value: string,
    icon?: React.ReactNode;
    delta?: string;
}

export default function OverviewCard({title, value, icon, delta}: OverviewCardProps) {
    const isNegative = delta?.startsWith('-');
    const Icon = isNegative ? ArrowDownRight : ArrowUpRight;
    return (
        <div className = "bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
            <div>
                <h3 className="text-sm text-gray-500">{title}</h3>
                <p className="text-xl font-semibold">{value}</p>
                <div className={`flex items-center gap-1 text-sm ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
                    <Icon className='w-4 h-4' />
                    <span>{delta}</span>
                </div>
            </div>
            {icon && <p className="text-gray-400">{icon}</p>}
        </div>
    );
}