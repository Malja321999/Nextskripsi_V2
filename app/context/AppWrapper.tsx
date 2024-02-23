"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "next-themes";

export const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        <AppContext.Provider
          value={{
            darkMode,
            setdarkMode,
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
