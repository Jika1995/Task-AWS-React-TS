import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router'
import { useCreateUser } from '../services/addUser'
import { User } from '../utils/types'

const AddUser: FC = () => {

    const [addUser] = useCreateUser()
    const [user, setUser] = useState<Omit<User, 'id'>>({
        name: '',
        salary: 0,
        feedback: '',
        active: false
    })
    const navigate = useNavigate()

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

    const handleSubmit = () => {
        addUser({ data: user })
        navigate('/')
    }

    return (
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                onChange={handleInp}
                value={user.name}
            />
            <TextField
                margin="normal"
                fullWidth
                name="salary"
                label="Salary"
                id="salary"
                onChange={handleInp}
                value={user.salary}

            />
            <TextField
                margin="normal"
                fullWidth
                name="feedback"
                label="Feedback"
                id="feedback"
                multiline
                maxRows={4}
                onChange={handleInp}
                value={user.feedback}

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
                Add New User
            </Button>
        </Box>
    )
}

export default AddUser