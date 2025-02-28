import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider } from "../components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"
import { Navbar } from "../components/ui/navbar"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimal Docs Site",
  description: "A gorgeous minimal documentation site using Next.js App Router",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased flex min-h-screen`}>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex-1">
            <Navbar className="border-b" />
            <main className="flex-1 overflow-auto p-8 pt-16">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

