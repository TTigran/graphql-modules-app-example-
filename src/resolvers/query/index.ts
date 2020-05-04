import {Author} from '../../types/model/author';
import { model } from '../../db';
import {UserProvider} from "../../providers/user.provider";


export const getAuthors = async (): Promise<Author[]> => {
    try {
        return model.Author.find();
    } catch (e) {
        console.error(e.message);
    }
};

export const getAuthor = async (root: any, {id}: { id: number }): Promise<Author> => {
    console.log(id);
    try {
        return model.Author.findOne({id});
    } catch (e) {
        console.log(e.massage);
    }
};

export const getUser = async (root: any, { id }: {id: string}, { injector }:any) => {
    return  injector.get(UserProvider).getUserById(id);
}

export const hello = async () => {
    return 'Hello GraphQL!';
};
