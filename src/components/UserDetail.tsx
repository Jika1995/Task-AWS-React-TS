import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

const UserDetail: FC = () => {
    return (
        <Box mt={3}>
            <Typography gutterBottom variant="h5" component="div">
                name
            </Typography>
            <Typography variant="body2" color="text.secondary">
                salary
            </Typography>
        </Box>
    )
}

export default UserDetail