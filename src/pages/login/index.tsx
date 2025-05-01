import { Container } from "@mui/material";
import LoginForm from "../../components/loginform/LoginForm";
import { useNavigate } from "@tanstack/react-router";
import { authStore } from "../../utils/authStore.ts";

const LoginIndex = (redirectTo: string | undefined) => {
  const navigate = useNavigate();
  const auth = authStore();

  const onSuccess = (username: string, token: string): void => {
    auth.setUsername(username);
    auth.setAccessToken(token);
    auth.setIsAuthenticated(true);
    if (!redirectTo) navigate({ to: "/dashboard", replace: true }).then();

    navigate({ to: redirectTo, replace: true }).then();
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <LoginForm onSuccess={onSuccess} />
    </Container>
  );
};

export default LoginIndex;
