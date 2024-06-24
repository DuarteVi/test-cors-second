import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest){
    
    return NextResponse.json('Here the response of your GET request');
}
