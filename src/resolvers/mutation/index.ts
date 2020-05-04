import { Author } from '../../types/model/author';
import { model } from '../../db';

export const addAuthor = async (root: any, {id, name}: {name: string, id: number}) => {
    const createdData: Author = { id, name};
    try {
        return model.Author.create(createdData);
    }catch (e) {
        console.error(e.message);
    }
};


