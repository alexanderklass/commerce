import { NextResponse } from 'next/server';
import { subscribeNewsLetterMutation } from '@/lib/shopify/mutations/newsletter';
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from '@/lib/constants';

const endpoint = SHOPIFY_GRAPHQL_API_ENDPOINT;
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const baseUrl = domain?.startsWith('https://') ? domain : `https://${domain}`;
const fullURL = `${baseUrl}${endpoint}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

//TODO check if it only works with created accounts

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const variables = {
      input: {
        email: email,
        acceptsMarketing: true,
        password: Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8),
      },
    };

    const response = await fetch(fullURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key!,
      },
      body: JSON.stringify({
        query: subscribeNewsLetterMutation,
        variables,
      }),
    });

    const data = await response.json();

    if (data.errors || (data.data?.customerCreate?.userErrors || []).length > 0) {
      console.error('Shopify errors:', data.errors || data.data?.customerCreate?.userErrors);
      throw new Error('Newsletter-Anmeldung fehlgeschlagen');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json({ error: 'Interner Server-Fehler' }, { status: 500 });
  }
}
