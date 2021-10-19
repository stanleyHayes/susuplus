import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Container, FormControl,
    Grid, InputLabel, LinearProgress,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import validator from "validator";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/auth-reducer";

const ResetPasswordPage = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const {token} = useParams();

    const handleSubmit = event => {
        event.preventDefault();
        if (!password) {
            setError({error, password: 'Password field required'});
            return;
        } else {
            setError({error, password: null});
        }

        if (!validator.isStrongPassword(password)) {
            setError({
                error,
                password: 'Enter a password that contains digits, lowercase, uppercase and special characters'
            });
            return;
        } else {
            setError({error, password: null});
        }

        if (!confirmPassword) {
            setError({error, confirmPassword: 'Password field required'});
            return;
        } else {
            setError({error, confirmPassword: null});
        }
        if (password !== confirmPassword) {
            setError({error, password: 'Password mismatch', confirmPassword: 'Password mismatch'});
            return;
        } else {
            setError({error, confirmPassword: null, password: null});
        }
        console.log(password, confirmPassword, token);
    }

    const {authLoading, message} = useSelector(selectAuth);

    return (
        <Layout>
            <Box sx={{backgroundColor: 'background.default', minHeight: '100vh'}}>
                <Container sx={{height: '100vh'}}>
                    <Grid
                        sx={{
                            height: '100%'
                        }}
                        container={true}
                        justifyContent="center"
                        alignItems="center">
                        <Grid item={true} xs={12} md={6} lg={5}>
                            <Card elevation={1}>
                                {authLoading && <LinearProgress color="secondary" variant="query"/>}
                                {message &&
                                <Alert severity="error" variant="standard">
                                    <AlertTitle>Error</AlertTitle>
                                    <Typography variant="body2" align="center">
                                        {message}
                                    </Typography>
                                </Alert>
                                }
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <Typography mb={2} variant="h3" align="center">
                                            Susu+
                                        </Typography>
                                        <Typography mb={2} variant="h6" align="center">
                                            Reset Password
                                        </Typography>

                                        <Stack direction="column" spacing={2}>

                                            <FormControl>
                                                <InputLabel htmlFor="password">Password</InputLabel>
                                                <OutlinedInput
                                                    name="password"
                                                    value={password}
                                                    type={isPasswordVisible ? 'text' : 'password'}
                                                    variant="outlined"
                                                    error={Boolean(error.password)}
                                                    label="Password"
                                                    placeholder="Password"
                                                    onChange={event => setPassword(event.target.value)}
                                                    fullWidth={true}
                                                    required={true}
                                                    margin="dense"
                                                    size="medium"
                                                    endAdornment={
                                                        isPasswordVisible ?
                                                            <VisibilityOff
                                                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}/> :
                                                            <Visibility
                                                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                                            />
                                                    }
                                                />
                                                {error.password && (
                                                    <Typography variant="body2" align="center" mt={1}>
                                                        {error.password}
                                                    </Typography>
                                                )}
                                            </FormControl>

                                            <FormControl>
                                                <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                                                <OutlinedInput
                                                    id="confirm-password"
                                                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                                                    name="confirmPassword"
                                                    value={confirmPassword}
                                                    variant="outlined"
                                                    error={Boolean(error.confirmPassword)}
                                                    label="Confirm Password"
                                                    placeholder="Confirm Password"
                                                    onChange={event => setConfirmPassword(event.target.value)}
                                                    fullWidth={true}
                                                    required={true}
                                                    margin="dense"
                                                    size="medium"
                                                    endAdornment={
                                                        isConfirmPasswordVisible ?
                                                            <VisibilityOff
                                                                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}/> :
                                                            <Visibility
                                                                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                                            />
                                                    }
                                                />
                                                {
                                                    error.confirmPassword && (
                                                        <Typography variant="body2" align="center" mt={1}>
                                                            {error.confirmPassword}
                                                        </Typography>
                                                    )
                                                }
                                            </FormControl>

                                            <Button
                                                type="submit"
                                                onClick={handleSubmit}
                                                sx={{mt: 2, borderWidth: 2}}
                                                variant="outlined"
                                                fullWidth={true}
                                                size="large">
                                                Reset Password
                                            </Button>
                                        </Stack>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ResetPasswordPage;
