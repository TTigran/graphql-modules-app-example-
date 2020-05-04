import { Schema, Document, model }  from 'mongoose';

export interface IAuthor extends Document {
    id: number;
    name: string;
}

const AuthorModel: Schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: String

});

export const Author = model<IAuthor>('Author', AuthorModel);



