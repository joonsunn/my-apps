import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
  // useMutation,
  // useInfiniteQuery,
  // useSuspenseQuery,
  // useQueryClient,
  // useIsFetching,
  // useIsMutating,
  // focusManager,
  // onlineManager,
  // dehydrate,
} from "@tanstack/react-query";
import React, { ReactNode } from "react";

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

// export {
//   useQuery,
//   useMutation,
//   useInfiniteQuery,
//   useSuspenseQuery,
//   useQueryClient,
//   useIsFetching,
//   useIsMutating,
//   focusManager,
//   onlineManager,
//   dehydrate,
//   QueryClient, // You might want to export QueryClient as well
//   QueryClientProvider, // Already exported, but for completeness
//   // ... and any other exports from @tanstack/react-query
// };

export * from "@tanstack/react-query";
