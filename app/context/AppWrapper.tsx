"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "next-themes";

export const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [darkMode, setdarkMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [Attempts, SetAttempts] = useState(0);
  const index = currentQuestion;
  const [Pass, SetPass] = useState(false);

  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AppContext.Provider
          value={{
            darkMode,
            setdarkMode,
            currentQuestion,
            setCurrentQuestion,
            points,
            setPoints,
            Attempts,
            SetAttempts,
            index,
            Pass,
            SetPass,
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
