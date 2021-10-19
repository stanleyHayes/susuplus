import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid, LinearProgress,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {verifyAccount} from "../../redux/authentication/auth-action-creators";

const VerifyAccountPage = () => {

    const [otp, setOTP] = useState("");
    const [error, setError] = useState("");
    const {token} = useParams();

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        if (!otp) {
            setError('OTP field required');
            return;
        } else {
            setError(null);
        }
        dispatch(verifyAccount(otp, token));
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
                                            Verify Account
                                        </Typography>

                                        <Stack direction="column" spacing={2}>

                                            <TextField
                                                name="otp"
                                                value={otp}
                                                type='text'
                                                variant="outlined"
                                                error={Boolean(otp)}
                                                label="OTP"
                                                placeholder="OTP"
                                                onChange={event => setOTP(event.target.value)}
                                                fullWidth={true}
                                                required={true}
                                                margin="dense"
                                                size="medium"
                                                helperText={error.otp}
                                            />

                                            <Button
                                                type="submit"
                                                onClick={handleSubmit}
                                                sx={{mt: 2, borderWidth: 2}}
                                                variant="outlined"
                                                fullWidth={true}
                                                size="large">
                                                Verify Account
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

export default VerifyAccountPage;
