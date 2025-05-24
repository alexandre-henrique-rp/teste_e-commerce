"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"


interface ChakraUIProviderProps {
    children: React.ReactNode
}

export default function ChakraUIProvider({ children }: ChakraUIProviderProps) {
  return (
    <ChakraProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}