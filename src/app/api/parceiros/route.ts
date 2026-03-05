import { NextResponse } from 'next/server';

const DEFAULT_UPSTREAM = 'https://parceiros-ael.vercel.app/parceiros';

export async function POST(req: Request) {
  const body = await req.json();
  const upstream =
    process.env.PARCEIROS_BFF_URL ?? process.env.NEXT_PUBLIC_PARCEIROS_BFF_URL ?? DEFAULT_UPSTREAM;

  try {
    const response = await fetch(upstream, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    const contentType = response.headers.get('content-type') ?? '';

    if (contentType.includes('application/json')) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }

    const text = await response.text();
    return new NextResponse(text, {
      status: response.status,
      headers: { 'Content-Type': contentType || 'text/plain; charset=utf-8' },
    });
  } catch {
    return NextResponse.json(
      { message: 'Falha ao enviar candidatura para o serviço externo.' },
      { status: 502 },
    );
  }
}
