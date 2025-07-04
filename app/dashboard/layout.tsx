'use client';
import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({children}: {children: React.ReactNode}){
    return (
        <div className="flex min-h-sreen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className='flex-1 p-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white'>
                {children}
            </main>
        </div>
    )
}