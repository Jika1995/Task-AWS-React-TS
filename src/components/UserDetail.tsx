import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useFetchUserById } from '../services/fetchUserById'

type Props = {
    id: string
}
const UserDetail = ({ id }: Props) => {

    const [user] = useFetchUserById({ id }, { enabled: Boolean(id) })
    if (!user) return null

    return (
        <Box mt={3}>
            <Typography gutterBottom variant="h5" component="div">
                {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {user.salary}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {user.feedback}
            </Typography>
            <FormControlLabel
                control={<Checkbox
                    checked={user.active}
                    color="primary"
                    inputProps={{ 'aria-label': 'controlled' }}
                    name="active"
                    disabled
                />}
                label={user.active ? 'active' : 'not active'}
            />
        </Box>
    )
}

export default UserDetail