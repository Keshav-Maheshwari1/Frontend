'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function ReactQueryClientProvider({ children }) {
    const queryClient = new QueryClient();
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </div>
    );
}