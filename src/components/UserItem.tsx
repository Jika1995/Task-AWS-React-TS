import { Button, Card, CardActions, CardContent, Modal, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useNavigate } from 'react-router';
import EditUserModal from '../modals/EditUserModal';

const UserItem: FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate()

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    salary
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleOpen}>Edit</Button>
                <Button size="small">Delete</Button>
                <Button size="small" onClick={() => navigate('/users/details')}>Details</Button>
            </CardActions>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditUserModal />
            </Modal>
        </Card>
    )
}

export default UserItem