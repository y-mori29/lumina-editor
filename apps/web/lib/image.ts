import sharp from 'sharp';

export async function resize(input: Buffer, width: number, height: number) {
  return sharp(input).resize(width, height).toBuffer();
}
