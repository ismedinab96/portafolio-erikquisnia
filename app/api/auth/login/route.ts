import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@admin.com" && password === "123456") {
    return NextResponse.json({ token: "fake-token-123" });
  }

  return NextResponse.json(
    { message: "Credenciales incorrectas" },
    { status: 401 }
  );
}