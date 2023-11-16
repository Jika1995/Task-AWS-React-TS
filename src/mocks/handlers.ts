import { rest } from "msw";
import { users } from "./data";
import { User } from "../utils/types";

export const handlers = [
    rest.get(`api/users`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.delay(), ctx.json<User[]>(users));
    }),
    rest.put(`api/users`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
    rest.delete(`api/users/:id`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
    rest.get(`api/users/:id`, (req, res, ctx) => {
        const user = users.find((u) => u.id === req.params.id);
        if (!user) {
            return res(ctx.status(404));
        }
        return res(
            ctx.status(200),
            ctx.delay(),
            ctx.json<User>(user)
        );
    }),

];
