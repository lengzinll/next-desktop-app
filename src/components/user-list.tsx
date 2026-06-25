"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";


export function UserList() {
  const [data, setData] = useState([]);
  const [theme] = useTheme();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
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
            {data.slice(0, 3).map((raw: any) => (
              <li key={raw.id} className="p-3 bg-background/50 rounded-md border border-border/30 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-semibold">{raw.title}</h4>
                  <p className="text-[10px] text-muted-foreground font-semibold mt-2">{raw.id}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
