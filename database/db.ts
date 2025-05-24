import { MONGODB_NAME, MONGODB_URI } from '@/utils/constants.server';
import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectDB = async () => {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  if (!MONGODB_NAME) {
    throw new Error('MONGODB_DB is not defined');
  }

  if (isConnected) {
    console.log('\n✅ Using existing MongoDB connection.\n');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: MONGODB_NAME,
    });
    isConnected = true;
    console.log(
      '✅ New MongoDB connection established at',
      new URL(MONGODB_URI).host
    );
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err;
  }
};
