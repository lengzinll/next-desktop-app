"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { COLORS, GAPS, SPACINGS, RADII, useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function ThemeCustomizer() {
  const [theme, setTheme] = useTheme();
  const setRadius = (r: string) => setTheme(prev => ({ ...prev, radius: r }));
  const setPrimaryColor = (c: string) => setTheme(prev => ({ ...prev, primaryColor: c }));
  const setSpacing = (s: string) => setTheme(prev => ({ ...prev, spacing: s }));
  const setGap = (g: string) => setTheme(prev => ({ ...prev, gap: g }));

  return (
    <Card className="border border-border/40 shadow-lg bg-card/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
        <CardDescription>Configure variables mapped to globals.css</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Color Selector */}
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Primary Theme Color
          </label>
          <div className="flex gap-3 flex-wrap">
            {COLORS.map((color) => (
              <Button
                key={color.name}
                onClick={() => setPrimaryColor(color.value)}
                className={`w-9 h-9 rounded-full ${color.bgClass} flex items-center justify-center border-2 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95 ${theme.primaryColor === color.value ? "border-foreground ring-2 ring-primary/45 scale-110" : "border-transparent"}`}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Radius Selector */}
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Border Radius (`--radius`)
          </label>
          <div className="grid grid-cols-1 gap-2">
            {RADII.map((r) => (
              <Button
                key={r.value}
                onClick={() => setRadius(r.value)}
                variant={r.value === theme.radius ? "default" : "outline"}
              >
                {r.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Spacing Selector */}
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Spacing Scale (`--spacing`)
          </label>
          <div className="grid grid-cols-1 gap-2">
            {SPACINGS.map((s) => (
              <Button
                key={s.value}
                onClick={() => setSpacing(s.value)}
                variant={s.value === theme.spacing ? "default" : "outline"}
              >
                {s.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gap Selector */}
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Layout Gap (`--gap`)
          </label>
          <div className="grid grid-cols-1 gap-2">
            {GAPS.map((g) => (
              <Button
                key={g.value}
                onClick={() => setGap(g.value)}
                variant={g.value === theme.gap ? "default" : "outline"}
              >
                {g.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
