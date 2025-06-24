import OverviewCard from "@/components/OverviewCard";
import CounterCard from "@/components/CounterCard";

export default function DashboardPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <OverviewCard title="Total Users" value="1,204" delta="+8%" />
                <OverviewCard title="Active Sessions" value="238" delta="-2%" />
                <OverviewCard title="Revenue" value="$12.4k" delta="+15%" />
                <OverviewCard title="Growth" value="12%" delta="+3%" />                
            </div>
        

            <div className="grid drig-cols-1 sm:grid-cols-2 gap-4">
                <CounterCard label="New Signups" defaultValue={10} />
                <CounterCard label="Errors Logged" defaultValue={1} />
            </div>
        </div>
    );
}