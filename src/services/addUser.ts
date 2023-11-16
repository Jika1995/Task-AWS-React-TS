import { baseAxios } from "../utils/baseAxios";
import { type User } from "../utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type CreateUserArg = {
    data: Omit<User, 'id'>
}

export const createUser = async (arg: CreateUserArg) => {
    const { data } = await baseAxios.post<User>('/users', arg.data)
    return data
}

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess() {
            queryClient.invalidateQueries({ predicate: (query) => query.queryKey[0] === 'users' })
        }
    })

    return [mutation.mutate, mutation] as const
}