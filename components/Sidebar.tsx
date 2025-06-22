export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white h-full p-4">
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul>
                <li className="mb-2"><a className = "block p-2 hover:bg-gray-700 rounded" href="/dashboard">Dashboard</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </aside>
    );
}