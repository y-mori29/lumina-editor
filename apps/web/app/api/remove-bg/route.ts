import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request: Request) {
  const data = await request.formData();
  const file = data.get('file') as File | null;
  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }
  const arrayBuffer = await file.arrayBuffer();
  const input = Buffer.from(arrayBuffer);
  // Placeholder: currently just returns the input without background removal
  const output = await sharp(input).png().toBuffer();
  return new NextResponse(output, {
    headers: { 'Content-Type': 'image/png' },
  });
}
