import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoginFormProps } from "./types.ts";
import { useAuth } from "../../utils/apiHooks.ts";

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { error, refetch, isLoading } = useAuth(login, password);
  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { data } = await refetch();
    if (data?.token) onSuccess(login, data.token);
  };

  return (
    <Container maxWidth="xs">
      <Paper
        component="form"
        elevation={5}
        sx={{
          p: 2,
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" mb={1} align="center">
          Вход
        </Typography>
        <Stack spacing={3}>
          {error ? (
            <Box
              height={40}
              bgcolor="red"
              borderRadius={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color="white" variant="body1" align="center">
                {error.message != null
                  ? "Ошибка сервера, попробуйте позже."
                  : error.title}
              </Typography>
            </Box>
          ) : null}
          <TextField
            id="login"
            label="Логин"
            variant="outlined"
            onChange={handleLoginChange}
          />
          <TextField
            id="password"
            label="Пароль"
            variant="outlined"
            type="password"
            onChange={handlePasswordChange}
          />
          <Button loading={isLoading} type="submit" variant="contained">
            Войти
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default LoginForm;
