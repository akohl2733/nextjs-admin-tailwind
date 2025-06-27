'use client';

import { ThemeProvider } from "@/components/ThemeContext";
import React from "react";

export function Providers({children}: { children: React.ReactNode}) {
    return <ThemeProvider>{children}</ThemeProvider>;
}