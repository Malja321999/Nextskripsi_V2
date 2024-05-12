"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "next-themes";

export const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        <AppContext.Provider
          value={{
            modalIsOpen,
            setModalIsOpen,
          }}
        >
          {children}
        </AppContext.Provider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
