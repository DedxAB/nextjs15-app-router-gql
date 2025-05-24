if (!process.env.MONGODB_URI) {
  throw new Error('❌ Missing MONGODB_URI in environment variables');
}

if (!process.env.MONGODB_NAME) {
  throw new Error('❌ Missing MONGODB_NAME in environment variables');
}

export const MONGODB_URI = process.env.MONGODB_URI!;
export const MONGODB_NAME = process.env.MONGODB_NAME!;
