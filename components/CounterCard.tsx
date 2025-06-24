'use client';
import React from "react";
import { useState } from 'react';

type CounterCardProps = {
    label: string;
    defaultValue?: number;
}

export default function CounterCard({ label, defaultValue = 0 }: CounterCardProps) {
    const [count, setCount] = useState(defaultValue);

    return (
        <div className="border p-4 rounded-xl shadow-md">
            <h2 className="text-gray-600 font-semibold mb-2">{label}</h2>
            <p className="text-gray-600 text=2xl mb-4">{count}</p>
            <button
                onClick={() => setCount(count+1)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Increment
            </button>
        </div>
    );
}