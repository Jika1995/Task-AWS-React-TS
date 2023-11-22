import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useCreateUser } from '../services/addUser'

type FormValues = {
    id: string;
    name: string;
    salary: number;
    feedback: string;
    active: boolean
}

const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const [addUser] = useCreateUser()

    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        addUser({ data })
        navigate('/')
    })

    return (
        <form onSubmit={onSubmit}>
            <Box component='div' sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    fullWidth
                    label="Id"
                    autoFocus
                    required
                    {...register("id", {
                        minLength: {
                            value: 1,
                            message: 'Name should be at least 1 character1'
                        },
                        required: true
                    })}
                />
                {errors.id && <p>{errors.id.message}</p>}
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
                    required
                    margin="normal"
                    fullWidth
                    label="Salary"
                    {...register("salary", {
                        required: true
                    })}
                />
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    label="Feedback"
                    id="feedback"
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
                    Add New User
                </Button>
            </Box>
        </form>
    )
}

export default AddUser