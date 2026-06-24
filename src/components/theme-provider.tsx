"use client"

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type ThemeContextType = {
  radius: string;
  primaryColor: string;
  spacing: string;
  gap: string;
};

const themeAtom = atomWithStorage<ThemeContextType>("theme", {
  radius: "0.5rem",
  primaryColor: "oklch(0.6104 0.0767 299.7335)",
  spacing: "0.25rem",
  gap: "1rem",
});

export const COLORS = [
  { name: "Violet", value: "oklch(0.6104 0.0767 299.7335)", bgClass: "bg-[oklch(0.6104_0.0767_299.7335)]" },
  { name: "Blue", value: "oklch(0.6 0.15 250)", bgClass: "bg-[oklch(0.6_0.15_250)]" },
  { name: "Emerald", value: "oklch(0.65 0.15 150)", bgClass: "bg-[oklch(0.65_0.15_150)]" },
  { name: "Rose", value: "oklch(0.6 0.18 10)", bgClass: "bg-[oklch(0.6_0.18_10)]" },
  { name: "Orange", value: "oklch(0.7 0.15 60)", bgClass: "bg-[oklch(0.7_0.15_60)]" }
];

export const RADII = [
  { label: "0px (Sharp)", value: "0px" },
  { label: "4px (Sleek)", value: "0.25rem" },
  { label: "8px (Default)", value: "0.5rem" },
  { label: "12px (Soft)", value: "0.75rem" },
  { label: "16px (Rounded)", value: "1rem" }
];

export const SPACINGS = [
  { label: "Compact  (0.2rem base)", value: "0.2rem" },
  { label: "Default  (0.25rem base)", value: "0.25rem" },
  { label: "Comfortable (0.3rem base)", value: "0.3rem" },
  { label: "Relaxed  (0.375rem base)", value: "0.375rem" },
  { label: "Spacious (0.5rem base)", value: "0.5rem" },
];

export const GAPS = [
  { label: "4px  (Tight)", value: "0.25rem" },
  { label: "8px  (Compact)", value: "0.5rem" },
  { label: "16px (Default)", value: "1rem" },
  { label: "24px (Spacious)", value: "1.5rem" },
  { label: "32px (Loose)", value: "2rem" },
];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useAtom(themeAtom);

  return (
    <div
      className="min-h-screen bg-background text-foreground transition-all duration-300"
      style={{
        "--radius": theme.radius,
        "--primary": theme.primaryColor,
        "--primary-foreground": "oklch(0.98 0.01 200)",
        "--spacing": theme.spacing,
        "--gap": theme.gap,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function useTheme() {
  return useAtom(themeAtom);
}
