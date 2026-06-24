"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useTheme } from "./theme-provider";

export function PreviewCard() {
  const [theme] = useTheme();

  return (
    <Card className="border border-border/40 shadow-xl overflow-hidden bg-card transition-all duration-300">
      <CardHeader className="border-b border-border/40 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Product Preview Card</CardTitle>
            <CardDescription>This card inherits your active styles</CardDescription>
          </div>
          <Button size="sm">Action Button</Button>
        </div>
      </CardHeader>
      <CardContent className="py-6 space-y-4">
        <div className="p-4 rounded-md bg-muted/50 border border-border/20 text-xs text-muted-foreground space-y-2">
          <span className="font-bold text-foreground">Current CSS Variables Applied:</span>
          <pre className="overflow-x-auto text-[10px] text-primary p-2 bg-background/80 rounded border border-border/30">
            {`--radius:  "${theme.radius}"
--primary:  "${theme.primaryColor}"
--spacing: "${theme.spacing}"
--gap:     "${theme.gap}"`}
          </pre>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Notice how modifying the sliders updates both the card's outer corners, inner container layouts, and the action buttons instantly without any page reload.
        </p>
      </CardContent>
      <CardFooter className="bg-muted/30 border-t border-border/40 flex justify-between items-center py-4 px-6">
        <span className="text-xs text-muted-foreground">Demo footer content</span>
        <Button variant="outline" size="sm">Secondary</Button>
      </CardFooter>
    </Card>
  );
}
