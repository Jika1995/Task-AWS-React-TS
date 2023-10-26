import { Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import UsersList from '../components/UsersList'

const HomePage: FC = () => {
    return (
        <Container maxWidth="sm">
            <Typography align='center' variant='h4' mt={3}>Users List</Typography>
            <UsersList />
        </Container>
    )
}

export default HomePage