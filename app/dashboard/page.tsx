import OverviewCard from "@/components/OverviewCard";
import CounterCard from "@/components/CounterCard";
import SearchBar from "@/components/SearchBar";
import StatCard from '@/components/StatCard';
import {stats} from "@/lib/stats";
import InfoBanner from "@/components/InfoBanner";

export default function DashboardPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            <SearchBar />

            <InfoBanner message="Welcome back!" />
            <InfoBanner message="Update Complete!" type="success" />
            <InfoBanner message="Error fetching stats." type="error" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <OverviewCard title="Total Users" value="1,204" delta="+8%" />
                <OverviewCard title="Active Sessions" value="238" delta="-2%" />
                <OverviewCard title="Revenue" value="$12.4k" delta="+15%" />
                <OverviewCard title="Growth" value="12%" delta="+3%" />                
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 mt-6 self-center">
                {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
                ))}
            </div>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CounterCard label="New Signups" defaultValue={10} />
                <CounterCard label="Errors Logged" defaultValue={1} />
            </div>
            
            
        </div>
    );
}