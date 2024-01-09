import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ name: "200", message: "success" });
}