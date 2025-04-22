'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function ReactQueryClientProvider({ children }) {
    const queryClient = new  QueryClient();
    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    );
}