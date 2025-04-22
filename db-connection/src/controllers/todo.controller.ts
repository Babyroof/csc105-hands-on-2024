import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing reaquired fields",
                },
                400
            );
        const newtodo = await todoModel.createTodo(body.title, body.userId);
        return c.json(
            {
                success: true,
                data: newtodo,
                msg: "Create new Todo",
            }
        );
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
}

const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
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
}

const updateTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.updateTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
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
}

type updateTitleBody = {
    title: string;
}

const updateTitle = async (c: Context) => {
    try {
        const param = c.req.query("id");
        const body = await c.req.json<updateTitleBody>()
        if(!param || !body.title){
            return c.json(
                {
                    success:false,
                    data:null,
                    msg:"Missing required fields"
                }
            )
        }
        const data = await todoModel.updateTitle(parseInt(param), body.title);
        return c.json(data, 200);
        
    } catch(e) {
        return c.json(
            {
                succes:false,
                data:null,
                msg: `${e}`,
            },
            500
        );
    }
}

const deleteTodo = async (c: Context) => {
    try {
        const query = c.req.query("id");
        if(query !== undefined && query !== null) {
            const data = await todoModel.deleteTodo(parseInt(query));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            }
        )
    } catch(e) {
        return c.json(
            {
                success: false,
                data:null,
                msg: `${e}`,
            },
            500
        );
    }
}

export { createTodo, getTodo, updateTodo, updateTitle, deleteTodo };