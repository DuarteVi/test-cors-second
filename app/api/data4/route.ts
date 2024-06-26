import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest){
    
    return NextResponse.json('Here the response of your GET request');
}

export async function DELETE (request: NextRequest){
    
    return NextResponse.json('This is the response of your DELETE request');
}