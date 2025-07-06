import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const dc = process.env.MAILCHIMP_SERVER_PREFIX;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!email || !apiKey || !dc || !listId) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const res = await fetch(
    `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email.toLowerCase(),
        status: 'pending',
      }),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    console.error('Mailchimp error:', error);
    return NextResponse.json({ error: error.detail }, { status: res.status });
  }

  return NextResponse.json({ success: true });
}
