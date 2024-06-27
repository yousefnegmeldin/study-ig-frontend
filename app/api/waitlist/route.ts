// app/api/waitlist/route.ts
import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGO_URI;
const options = {};

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export async function POST(req: NextRequest) {
  try {
    console.log(req);
    const { name, email,content } = await req.json();

    if (!name || !email || !content) {
      return NextResponse.json({ message: 'Name and email are required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('waitlistDB');
    const collection = db.collection('waitlist');

    await collection.insertOne({ name, email, content });

    return NextResponse.json({ message: 'Successfully added to waitlist' }, { status: 200 });
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
