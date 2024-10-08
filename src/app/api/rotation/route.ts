import { fetchChampionRotation } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetchChampionRotation();

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching rotation champions:", error);
    return NextResponse.json({ error: "Failed to fetch champion rotation" }, { status: 500 });
  }
}
