import { db } from "../index.ts"

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const getAllUser = async() => {
    const user = await db.user.findMany()
    return user;
}

const getAllTodByUser = async(userId: number) => {
    const user = await db.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            Todo: true,
        },
    });
    return user;
}

const editUser = async(userId: number, firstName: string, lastName: string) => {
    const user = await db.user.update({
        where: {
            id: userId,
        },
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}


export { isDuplicate, createUser, getAllUser, getAllTodByUser, editUser };