import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { FC } from 'react'

const AddUser: FC = () => {

    const handleSubmit = () => {
        return null
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
                Add New User
            </Button>
        </Box>
    )
}

export default AddUser