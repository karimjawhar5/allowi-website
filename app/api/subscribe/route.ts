import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX; // like 'us21'
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!email || !apiKey || !serverPrefix || !listId) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 });
  }

  const response = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email.toLowerCase(),
        status: 'pending', // or 'subscribed' for instant
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json({ error: error.detail }, { status: response.status });
  }

  return NextResponse.json({ success: true });
}
