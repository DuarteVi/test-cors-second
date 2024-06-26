import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest){
    
    return NextResponse.json('This is the response of your GET request');
}

export async function POST (request: NextRequest){
    
    return NextResponse.json('This is the response of your POST request');
}

export async function HEAD (request: NextRequest){
    
    return NextResponse.json('This is the response of your HEAD request');
}

export async function DELETE (request: NextRequest){
    
    return NextResponse.json('This is the response of your DELETE request');
}

export async function PUT (request: NextRequest){
    
    return NextResponse.json('This is the response of your PUT request');
}