"use client";
import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";
import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { FieldValues } from "react-hook-form";
import { MdOutlineLogin } from "react-icons/md";
const LoginPage = () => {
  const handleLogin = (values: FieldValues) => {
   
    console.log(values)
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 2,
            borderRadius: 1,
            padding: "32px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            my={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box fontWeight={900} fontSize={60} color="#EAB308">
              <MdOutlineLogin />
            </Box>
            <Box>
              <Typography fontWeight={700} fontSize={50} color="#EAB308">
                Login
              </Typography>
            </Box>
          </Stack>
          <Form onSubmit={handleLogin}>
            <Grid container spacing={2} my={1}>
              <Grid
                item
                md={6}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginX: "auto",
                }}
              >
                <InputField
                  name="email"
                  label="Email"
                  type="email"
                  size="small"
                  fullWidth={true}
                  required={true}
                />
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginX: "auto",
                }}
              >
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  size="small"
                  fullWidth={true}
                  required={true}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth={true}
              sx={{ margin: "20px 0px" }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
};
export default LoginPage;
