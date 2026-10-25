import { NextResponse } from 'next/server';
import { put, list } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

const BLOB_FILENAME = 'portfolioData.json';

export async function GET() {
  try {
    // 1. Try fetching the latest data from Vercel Blob store
    const { blobs } = await list({ 
      prefix: BLOB_FILENAME, 
      token: process.env.BLOB_READ_WRITE_TOKEN 
    });
    
    if (blobs.length > 0) {
      const response = await fetch(blobs[0].url);
      const data = await response.json();
      return NextResponse.json(data);
    }

    // 2. Fallback to local file for local development if blob doesn't exist yet
    const localPath = path.join(process.cwd(), 'src/data/portfolioData.json');
    if (fs.existsSync(localPath)) {
      const fileData = fs.readFileSync(localPath, 'utf8');
      return NextResponse.json(JSON.parse(fileData));
    }

    return NextResponse.json({ error: 'No data found' }, { status: 404 });
  } catch (error) {
    console.error('Read data error:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    
    // Save/overwrite JSON data directly in Vercel Blob storage
    await put(BLOB_FILENAME, JSON.stringify(newData, null, 2), {
      access: 'public',
      contentType: 'application/json',
      token: process.env.BLOB_READ_WRITE_TOKEN,
      addRandomSuffix: false, // Ensures it overwrites the same file instead of creating new ones
    });

    return NextResponse.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.error('Save data error:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}