import mongoose from 'mongoose';

export async function connectMongo(uri = process.env.MONGO_URI) {
  if (!uri) throw new Error('MONGO_URI manquant');
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri);
  console.log('[Mongo] connecté');
}
