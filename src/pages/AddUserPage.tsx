import { Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import AddUser from '../components/AddUser'

const AddUserPage: FC = () => {
    return (
        <Container maxWidth="sm">
            <Typography align='center' variant='h4' mt={3}>Add New User</Typography>
            <AddUser />
        </Container>
    )
}

export default AddUserPage