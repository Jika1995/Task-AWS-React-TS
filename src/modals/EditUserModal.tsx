import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { yellow } from '@mui/material/colors';
import { User } from '../utils/types';
import { useEditUser } from '../services/editUser';
import { useNavigate } from 'react-router';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid',
    borderColor: yellow[200],
    boxShadow: 24,
    p: 4,
};

type Props = {
    item: User
};

const EditUserModal = ({ item }: Props) => {

    const [user, setUser] = useState(item);
    const [editUser] = useEditUser();
    const navigate = useNavigate()

    const handleSubmit = () => {
        editUser({
            id: user.id,
            data: user
        })
        navigate('/')
    };

    const handleInp = (e: React.ChangeEvent<any>) => {
        if (e.target.name === 'salary') {
            setUser((prevUser) => ({
                ...prevUser,
                salary: Number(e.target.value)
            }));
        } else if (e.target.name === 'active') {
            setUser((prevUser) => ({
                ...prevUser,
                active: e.target.checked,
            }));
        } else {
            setUser((prevUser) => ({
                ...prevUser,
                [e.target.name]: e.target.value
            }));
        }
    }

    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
                Edit User Info
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                    value={user.name}
                    onChange={handleInp}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="salary"
                    label="Salary"
                    id="salary"
                    value={user.salary}
                    onChange={handleInp}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="feedback"
                    label="Feedback"
                    id="feedback"
                    multiline
                    maxRows={4}
                    value={user.feedback}
                    onChange={handleInp}
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={user.active}
                        onChange={handleInp}
                        color="primary"
                        inputProps={{ 'aria-label': 'controlled' }}
                        name="active"
                    />}
                    label="Activate/Deactivate"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Save changes
                </Button>
            </Box>
        </Box >
    )
}

export default EditUserModal