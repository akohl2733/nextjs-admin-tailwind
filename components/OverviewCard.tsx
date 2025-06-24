type OverviewCardProps = {
    title: string;
    value: string,
    icon?: React.ReactNode;
    delta?: string;
}

export default function OverviewCard({title, value, icon, delta}: OverviewCardProps) {
    return (
        <div className = "bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
            <div>
                <h3 className="text-sm text-gray-500">{title}</h3>
                <p className="text-xl font-semibold">{value}</p>
                {delta && <p className="text-sm text-green-500">{delta}</p>}
            </div>
            {icon && <p className="text-gray-400">{icon}</p>}
        </div>
    );
}