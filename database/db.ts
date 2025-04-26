import { MONGODB_URI } from '@/utils/constants';
import mongoose from 'mongoose';

export const connectDB = async () => {
  if (!MONGODB_URI.trim()) {
    throw new Error('MONGODB_URI is not defined');
  }

  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (mongoose.connection.readyState === 1) {
    console.log('MongoDB already connected.');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected.');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
};
