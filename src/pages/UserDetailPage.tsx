import { Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import UserDetail from '../components/UserDetail'

const UserDetailPage: FC = () => {
    return (
        <Container maxWidth="sm">
            <Typography align='center' variant='h4' mt={3}>Users Detail</Typography>
            <UserDetail />
        </Container>
    )
}

export default UserDetailPage