import { baseAxios } from "../utils/baseAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type User } from "../utils/types";

export type UserArg = {
    id: string | readonly string[]
    data: Partial<User> | null
}

const editUser = async (arg: UserArg) => {
    const { data } = await baseAxios.patch<User>(`/users/${arg.id}`, arg.data)
    return data
}

export const useEditUser = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: editUser,
        onSuccess() {
            queryClient.invalidateQueries({ predicate: (query) => query.queryKey[0] === 'users' })
        }
    })

    return [mutation.mutate, mutation] as const
}