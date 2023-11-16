import { Container, Typography } from '@mui/material'
import UserDetail from '../components/UserDetail'

const UserDetailPage = () => {
    return (
        <Container maxWidth="sm">
            <Typography align='center' variant='h4' mt={3}>Users Detail</Typography>
            <UserDetail />
        </Container>
    )
}

export default UserDetailPage