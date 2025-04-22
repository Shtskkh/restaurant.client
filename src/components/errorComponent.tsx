import { Typography } from "@mui/material";
import { DefaultError } from "@tanstack/react-query";

type ErrorComponentProps = {
  error: DefaultError;
};

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <Typography variant="body1" color="textPrimary" mt={3} mb={3}>
      {error.message}
    </Typography>
  );
};

export default ErrorComponent;
