import * as mongoose from 'mongoose';

export default (mongoURI: string) => mongoose.connect(mongoURI);