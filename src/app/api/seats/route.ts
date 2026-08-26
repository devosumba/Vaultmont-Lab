import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const SEATS_FILE = path.join(process.cwd(), "data", "seats.json");

function readSeats() {
  return JSON.parse(fs.readFileSync(SEATS_FILE, "utf8"));
}

export async function GET() {
  const data = readSeats();
  return NextResponse.json(data);
}

export async function POST() {
  const data = readSeats();
  if (data.remaining > 0) {
    data.remaining -= 1;
    fs.writeFileSync(SEATS_FILE, JSON.stringify(data));
  }
  return NextResponse.json(data);
}
