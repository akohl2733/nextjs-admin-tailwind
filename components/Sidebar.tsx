import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    
    const linkClass = (href: string) => 
        `block p-2 rounded hover:bg-gray-700 ${pathname === href ? "bg-gray-800 font-semibold" : ""}`;

    return (
        <aside className="w-64 bg-gray-900 text-white h-full p-4">
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul>
                <li>
                    <Link href='/dashboard' className={linkClass("/dashboard")}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard/overview' className={linkClass("/dashboard/overview")}>
                        Overview
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard/analytics' className={linkClass("/analytics")}>
                        Analytics
                    </Link>
                </li>
                <li>
                    <Link href='/settings' className={linkClass("/settings")}>
                        Settings
                    </Link>
                </li>
            </ul>
        </aside>
    );
}