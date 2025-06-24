'use client';

import { useState, useEffect } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    useEffect(() => {
        console.log("Search query changed:", query);
    }, [query]);

    return (
        <div className="my-4">
            <input
                type="text"
                placeholder="Search something..."
                className='border p-2 rounded w-full'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}