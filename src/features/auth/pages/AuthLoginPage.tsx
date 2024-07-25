import { Box, Button, Typography } from "@mui/material"
import { useAuthLogin } from "../hooks/useAuthLogin"



export const AuthLoginPage = () => {

    const { onLogin } = useAuthLogin();


    return (
        <Box className="use-completed-vh"  >
            <Typography variant="h3" >Login Page</Typography>
            <Box my={3} />
            <Button variant="contained" onClick={onLogin}  >
                Iniciar Sesion
            </Button>
        </Box>
    )
}