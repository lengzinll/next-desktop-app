"use client"

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { PreviewCard } from "@/components/preview-card";
import { UserList } from "@/components/user-list";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-gap">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary transition-colors duration-300">
            Rorn System Customizer
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Dynamically adjust system-wide styles using global CSS variables.
          </p>
        </div>

        {/* Customizer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gap items-start">
          {/* Controls Column */}
          <div className="md:col-span-5">
            <ThemeCustomizer />
          </div>

          {/* Live Preview Column */}
          <div className="md:col-span-7 flex flex-col gap-gap">
            <div className="text-xs font-semibold tracking-wider text-muted-foreground pl-1">
              Live Preview
            </div>
            <PreviewCard />
            <UserList />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}