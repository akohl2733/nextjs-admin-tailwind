'use client';

import { useTheme } from '@/components/ThemeContext';


export default function DarkModeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-grayu-200 dark:bg-gray-800 dark:text-white text-sm"
        >
            {theme === 'dark' ? '🌙 Dark Mode On' : '☀️ Light Mode'}
        </button>
    )
}