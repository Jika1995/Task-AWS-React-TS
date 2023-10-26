import { baseAxios } from "../utils/baseAxios";
import { type User } from "../utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ArgUser = {
    id: string | readonly string[]
}

export const deleteUser = async (arg: ArgUser) => {
    const { data } = await baseAxios.delete<User>(`/users/${arg.id}`)

    return data
}

export const useDeleteUser = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: deleteUser,
        onSuccess() {
            queryClient.invalidateQueries({
                predicate: (query) => query.queryKey[0] === 'users'
            })
        }
    })

    return [mutation.mutateAsync, mutation] as const
}