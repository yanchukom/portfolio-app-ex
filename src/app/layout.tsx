import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beatrice Wambui - Portfolio",
  description: "FullStack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="container mx-auto px-4 py-8">
            <header className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">
                  <span>Beatrice</span>{" "}
                  <span className="text-orange-500">Wambui</span>
                </h1>
              </div>
              <ThemeToggle />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <ProfileSidebar />
              </div>

              <div className="md:col-span-2">
                <div className="mb-6 flex justify-end">
                  <Navigation />
                </div>
                <main>{children}</main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
