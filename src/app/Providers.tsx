'use client'
import { ThemeProvider } from "next-themes";
// @ts-ignore 
function Provider({ children }) {
    return (
        // @ts-ignore
        <ThemeProvider defaultTheme="system" attribute="class">
        <div className=" text-gray-700 dark:text-gray-200 dark:min-h-screen select-none transition-colors duration-300">
            {children}
        </div>
        </ThemeProvider>
      );
}

export default Provider;