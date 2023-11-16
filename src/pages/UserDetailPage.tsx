import { Container, Typography } from '@mui/material'
import { useParams } from 'react-router';
import UserDetail from '../components/UserDetail'

const UserDetailPage = () => {

    const { id } = useParams();
    if (!id) return null

    return (
        <Container maxWidth="sm">
            <Typography align='center' variant='h4' mt={3}>Users Detail</Typography>
            <UserDetail id={id} />
        </Container>
    )
}

export default UserDetailPage