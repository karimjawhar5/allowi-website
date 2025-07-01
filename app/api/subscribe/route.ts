import { NextRequest, NextResponse } from 'next/server';
import { subscribe } from '@/lib/subscribe';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const ok = await subscribe(email);
  return NextResponse.json({ ok });
}
