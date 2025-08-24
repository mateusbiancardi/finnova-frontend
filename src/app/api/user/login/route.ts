import axios from "axios";
import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { login, password } = body;

    if (!login || !password) {
      return NextResponse.json(
        { erro: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const apiResponse = await axios.post(
      "http://localhost:5000/api/user/login",
      {
        login,
        password,
      }
    );
    const { token, user } = apiResponse.data;

    const secureCookie = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return NextResponse.json(
      { success: true, user },
      {
        status: 200,
        headers: { "Set-Cookie": secureCookie },
      }
    );
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { erro: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
