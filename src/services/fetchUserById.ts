import { useQuery } from "@tanstack/react-query";
import { baseAxios } from "../utils/baseAxios";
import { type User } from "../utils/types";

export type FetchUserByIdArg = {
    id: string | readonly string[]
}

export const fetchUserById = async (arg: FetchUserByIdArg) => {
    const { data } = await baseAxios.get<User>(`/users/${arg.id}`)
    return data
}

export const useFetchUserById = (arg: FetchUserByIdArg, options: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryFn: () => fetchUserById(arg),
        queryKey: ['users', arg],
        ...options
    })

    return [query.data, query] as const
}