import React, { FC } from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Navbar: FC = () => {

    const navigate = useNavigate()

    return (
        <Toolbar
            sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="left"
                noWrap
                sx={{ flex: 1 }}
                onClick={() => navigate("/")}
            >
                Users App
            </Typography>
            <Button
                variant="outlined"
                size="small"
                onClick={() => navigate("/users/add")}>
                Add New User
            </Button>
        </Toolbar>
    )
}

export default Navbar


