import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { AllStateContextProvider } from "@/context/AllStateContext";
import { DataFunctionContextProvider } from "@/context/DataFunctionContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <AllStateContextProvider>
        <DataFunctionContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </DataFunctionContextProvider>
      </AllStateContextProvider>
    </SessionProvider>
  );
}
