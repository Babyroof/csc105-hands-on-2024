import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
		});
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
};

const getAllUser = async (c: Context) => {
    try {
        const data = await userModel.getAllUser();
        return c.json(data, 200);
    } catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

const getAllTodByUser = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await userModel.getAllTodByUser(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing requires fields",
            }
        )

    } catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`
            },
            500
        );
    }
};

type editUserBody = {
    firstName: string,
    lastName: string,
}

const editUser = async (c: Context) => {
    try {
        const param = c.req.query("id");
        const body = await c.req.json<editUserBody>();

        if(!param || !body.firstName || !body.lastName) {
            return c.json(
                {
                    success: false,
                    data:null,
                    msg: "missing require fields"
                }
            )
        }

        const data = await userModel.editUser(parseInt(param), body.firstName, body.lastName);
        return c.json(data, 200);
    } catch(e) {
        return c.json(
            {
                sucees: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
export { createUser, getAllUser, getAllTodByUser, editUser };