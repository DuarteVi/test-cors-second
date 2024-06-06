import { NextApiResponse } from "next";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const cookieName = 'MonSuperCookie';

export async function POST (request: NextRequest, response : NextApiResponse){
  response.setHeader('Access-Control-Allow-Origin', 'https://test-cors-second.vercel.app');
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Set-Cookie', 'MonSuperCookie=miamMiam; HttpOnly; Secure; SameSite=None; Path=/');
  response.status(200).json({ message: 'Cookie set' });
}

export async function GET (request: NextRequest){
  const cookieStore = cookies();
  const cookiesResponse : RequestCookie[] = [];
  cookieStore.getAll().map((cookie) => (
    cookiesResponse.push(cookie)
  ))
  return NextResponse.json(JSON.stringify(cookiesResponse));
}

export async function DELETE (request: NextRequest){
  cookies().delete(cookieName)
  return NextResponse.json("cookie deleted");
}
