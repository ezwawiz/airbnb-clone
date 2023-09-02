'use client'

import { useEffect, useState } from "react";

// Problem with App Router where if you clicked on anything mid load (or I guess render) it would 
// throw an error randomly. Creating this component and then wrapping our entire project in layout.tsx
// with this corrects this problem. That's why ClientOnly is a thing.

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}

export default ClientOnly;