import { connect } from 'mongoose';
import { Author } from './model';
import '../env';

(async function () {
    const mongoUrl: string = process.env.MONGODB_URL || 'mongodb://localhost:27017';
    const database: string = process.env.MONGODB_DATABASE || 'test';
    const connectionsString = [mongoUrl, database].join('/');
    await connect(connectionsString, {useNewUrlParser: true, useUnifiedTopology: true});
})();

export const model = { Author };


