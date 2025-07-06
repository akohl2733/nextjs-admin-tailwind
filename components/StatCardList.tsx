'use client';

import { useEffect, useState } from "react";
import StatCard from './StatCard';

interface Stat {
    title: string;
    value: string;
    change: string;
}

export default function StatCardList(){
    const [stats, setStats ] = useState<Stat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/stats')
            .then((res) => res.json())
            .then((data) => {
                setStats(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch stats:', err);
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