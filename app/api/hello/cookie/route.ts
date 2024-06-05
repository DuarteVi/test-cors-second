import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const cookieName = 'MonSuperCookie';

export async function POST (request: NextRequest){
    cookies().set({
        name: cookieName,
        value: 'miam',
        path: '/',
      });
    return NextResponse.json("cookie set");
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
