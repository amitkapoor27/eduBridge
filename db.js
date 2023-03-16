import mongoose from 'mongoose';

let client;

export const initializeDbConnection = async () => {
    client = await mongoose.connect('mongodb://172.16.3.215:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}