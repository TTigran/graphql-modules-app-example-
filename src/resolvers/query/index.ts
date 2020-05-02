import {Author} from '../../@types/model/author';
import {getModel} from '../../db';
import {UserProvider} from "../../providers/user.provider";
import {User} from "../../@types/model/user";

export const getAuthors = async (): Promise<Author[]> => {
    try {
        const model = await getModel();
        return model.Author.find();
    } catch (e) {
        console.error(e.message);
    }
};

export const getAuthor = async (root: any, {id}: { id: number }): Promise<Author> => {
    console.log(id);
    try {
        const model = await getModel();
        return model.Author.findOne({id});
    } catch (e) {
        console.log(e.massage);
    }
};
export const getUser = async (
    root: any,
    {id}: { id: number },
    {injector}: { injector: any }): Promise<any> => {

    return  injector.get(UserProvider).getUserById(id);
}

export const hello = async () => {
    return 'Hello GraphQL!';
};
