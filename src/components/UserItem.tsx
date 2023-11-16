import { Button, Card, CardActions, CardContent, Modal, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import EditUserModal from '../modals/EditUserModal';
import { useDeleteUser } from '../services/deleteUser';
import { User } from '../utils/types';

type Props = {
    item: User
}
const UserItem = ({ item }: Props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const link = `users/${item.id}`
    const [deleteUser] = useDeleteUser()

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.salary}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleOpen}>Edit</Button>
                <Button size="small" onClick={() => deleteUser({ id: item.id })}>Delete</Button>
                <Link to={link}>
                    <Button size="small">Details</Button>
                </Link>
            </CardActions>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditUserModal item={item} />
            </Modal>
        </Card>
    )
}

export default UserItem