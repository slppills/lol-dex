import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key is not set" }, { status: 500 });
  }

  try {
    const res = await fetch("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations", {
      headers: {
        "X-Riot-Token": apiKey,
      },
    });

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
