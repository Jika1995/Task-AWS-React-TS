import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { yellow } from '@mui/material/colors';
import { User } from '../utils/types';
import { useEditUser } from '../services/editUser';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

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
    item: User,
    handleClose: () => void
};

const EditUserModal = ({ item, handleClose }: Props) => {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: item.name,
            salary: item.salary,
            feedback: item.feedback,
            active: item.active
        }
    })

    const [editUser] = useEditUser();
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        editUser({
            id: item.id,
            data: data
        })
        handleClose()
    })

    return (
        <form onSubmit={onSubmit}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
                    Edit User Info
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Name"
                        autoFocus
                        required
                        {...register("name", {
                            minLength: {
                                value: 3,
                                message: 'Name should be at least 3 characters'
                            },
                            required: true
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Salary"
                        {...register("salary", {
                            required: true
                        })}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Feedback"
                        multiline
                        maxRows={4}
                        {...register("feedback", {
                            required: true,
                            minLength: {
                                value: 4,
                                message: 'Feedback should be at least 4 characters'
                            },
                        })}
                    />
                    {errors.feedback && <p>{errors.feedback.message}</p>}
                    <FormControlLabel
                        control={<Checkbox />}
                        {...register('active')}
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
        </form>
    )
}

export default EditUserModal