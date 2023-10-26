import { useQuery } from "@tanstack/react-query"
import { baseAxios } from "../utils/baseAxios"
import { type User } from "../utils/types"

export type Params = {
    page?: number
}

export const fetchUsers = async (arg?: Params) => {
    const { data } = await baseAxios.get<User[]>('/users', {
        params: arg
    });

    return data
}

export const useFetchUsers = (arg?: Params) => {
    const query = useQuery({
        queryFn: () => fetchUsers(arg),
        queryKey: ['users', arg],
        initialData: []
    })

    return [query.data, query] as const
}