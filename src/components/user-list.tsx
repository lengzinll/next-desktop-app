"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";


export function UserList() {
  const [data, setData] = useState([]);
  const [theme] = useTheme();

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Card className="border border-border/40 shadow-lg bg-card/60">
      <CardHeader>
        <CardTitle>API Users</CardTitle>
        <CardDescription>Mock API integration test list</CardDescription>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <p className="text-xs text-muted-foreground">Loading mockup users...</p>
        ) : (
          <ul className="space-y-3">
            {data.slice(0, 3).map((user: any) => (
              <li key={user.id} className="p-3 bg-background/50 rounded-md border border-border/30 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-semibold">{user.name}</h4>
                  <p className="text-[10px] text-muted-foreground">{user.email}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Active</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
