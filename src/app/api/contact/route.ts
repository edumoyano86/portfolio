
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // This endpoint is no longer used as contact is handled via mailto link.
  // Returning a success response to avoid errors if it's still called.
  return NextResponse.json({ message: 'Endpoint deprecated. Use mailto link.' }, { status: 200 });
}
