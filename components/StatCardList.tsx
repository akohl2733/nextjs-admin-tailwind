'use client';

import { useEffect, useState } from "react";
import StatCard from './StatCard';
import { stat } from "fs";

interface Stat {
    title: string;
    value: string;
    change: string;
}

export default function StatCardList(){
    const [stats, setStats ] = useState<Stat[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:8000/metrics')
            .then((res) => {
                if (!res.ok) throw new Error("Server error");
                return res.json();
            })
            .then((data) => {
                const transformedStats: Stat[] = data.map((metric: any) => ({
                    title: metric.name,
                    value: metric.value.toString(),
                    change: "+0%"
                }));
                setStats(transformedStats);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch stats:', err);
                setError("Failed to load stats. Please try again later.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-6">
                <span className="animate-spin h-6 w-6 border-4 border-t-transparent border-blue-500 rounded-full" />
                <p className="ml-2">Loading stats...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-6 text-red-500">
                {error}
            </div>
        )
    }

    if (stats.length === 0) {
        <div className="text-center p-6 text-gray-500">
            No Metrics Available
        </div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
            <StatCard 
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
             />
        ))}
        </div>
    );
}