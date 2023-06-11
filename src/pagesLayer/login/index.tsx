import { FC, useState } from "react";
import { Button, TextField, FormControlLabel, Checkbox, Box, Typography, Container, styled } from "@mui/material";

const StyledButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#4caf50",
    },
});

const Login: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({
            email,
            password,
        });
    };

    return (
        <Container style={{ marginTop: "120px" }} maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component='h1' variant='h5'>
                    Вход в аккаунт
                </Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        label='Email'
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        name='password'
                        label='Пароль'
                        type='password'
                    />
                    <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Запомнить меня' />
                    <StyledButton
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2, padding: "12px", background: "#232323" }}
                    >
                        Войти
                    </StyledButton>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;