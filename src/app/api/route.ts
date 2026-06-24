import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    return NextResponse.json([
        {
            id: 1,
            name: "Rorn 123",
            email: "rorn@gmail.com"
        },
        {
            id: 2,
            name: "Long 123",
            email: "long@gmail.com"
        }
    ]);
}