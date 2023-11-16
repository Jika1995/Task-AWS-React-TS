import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { useFetchUsers } from '../services/fetchUsers'
import UserItem from './UserItem'

const UsersList: FC = () => {

    const [data] = useFetchUsers()

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center"
            alignItems="center" mt={3}
        >
            {data.map(item => (
                <Grid item xs={6} key={item.id}>
                    <UserItem item={item} />
                </Grid>
            ))}

        </Grid>

    )
}

export default UsersList