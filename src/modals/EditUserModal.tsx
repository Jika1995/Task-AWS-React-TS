import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { yellow } from '@mui/material/colors';

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

const EditUserModal: FC = () => {

    const handleSubmit = () => {
        return null
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
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="salary"
                    label="Salary"
                    id="salary"
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="feedback"
                    label="Feedback"
                    id="feedback"
                    multiline
                    maxRows={4}
                />
                <FormControlLabel
                    control={<Checkbox value="activity" color="primary" />}
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