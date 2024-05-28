import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest){
    
    const alice = {
        'pseudo': "Alice",
        'password': "MiamLesPommes",
        'phone': "0611332022"
    }

    return NextResponse.json(alice);
}

export async function DELETE (request: NextRequest){
    
    const bob = {
        'pseudo': "Bob",
        'password': "MiamLesPoires",
        'phone': "0611332022"
    }

    return NextResponse.json(bob);
}

