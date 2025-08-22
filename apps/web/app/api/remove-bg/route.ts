import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file');
  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const response = await fetch('http://localhost:7000/remove-bg', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to remove background' },
      { status: response.status }
    );
  }

  const arrayBuffer = await response.arrayBuffer();
  return new NextResponse(arrayBuffer, {
    headers: { 'Content-Type': 'image/png' },
  });
}
