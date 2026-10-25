import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/portfolioData.json');

export async function GET() {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(fileData));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2), 'utf8');
    return NextResponse.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}