// packages/tanstack-query-wrapper/index.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

// Create a default QueryClient instance with any desired global configurations
const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Example: Retry once on error
      staleTime: 5 * 60 * 1000, // Example: Data is considered stale after 5 minutes
    },
  },
});

interface TanstackQueryProviderProps {
  client?: QueryClient;
  children: ReactNode;
}

export const TanstackQueryProvider: React.FC<TanstackQueryProviderProps> = ({
  client = defaultQueryClient,
  children,
}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export * from "@tanstack/react-query";
export * as api from "./api";
