import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

export const RecoilProvider = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export const QueryProvider = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        onError: (error) => {
          console.log(error);
        },
      },
      mutations: {
        onError: (error) => {
          console.log(error);
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
