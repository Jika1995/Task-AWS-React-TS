import { Grid } from '@mui/material'
import React, { FC } from 'react'
import UserItem from './UserItem'

const UsersList: FC = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center"
            alignItems="center" mt={3}
        >
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
            <Grid item xs={6}>
                <UserItem />
            </Grid>
        </Grid>

    )
}

export default UsersList