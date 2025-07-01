'use server';

export async function subscribe(rawEmail: string): Promise<boolean> {
  'use server';

  const email = rawEmail.toLowerCase();         // helps prevent 400 “Member Exists”
  const { MAILCHIMP_API_KEY: apiKey,
          MAILCHIMP_SERVER_PREFIX: dc,
          MAILCHIMP_LIST_ID: listId } = process.env;

  try {
    const res = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'pending',                     // double-opt-in ✔️ :contentReference[oaicite:1]{index=1}
        }),
        // 10-second hard-timeout so the UI never hangs
        next: { revalidate: 0, tags: ['mailchimp'] },
      },
    );

    if (!res.ok) {
      // Dump the full response body to server logs for debugging
      console.error(
        `Mailchimp error ${res.status}`,
        await res.text(),
      );
      return false;
    }

    return true;
  } catch (err) {
    console.error('Network/Runtime error →', err);
    return false;
  }
}
