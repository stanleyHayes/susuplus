import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle,
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Typography
} from "@mui/material";

import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {makeStyles} from "@mui/styles";

const VerificationSuccessPage = () => {
    const {message} = useSelector(selectAuth);

    const useStyles = makeStyles(() => {
        return {
            success: {

            }
        }
    });

    const classes = useStyles();

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

                                <CardContent>
                                    <Typography mb={2} variant="h3" align="center">
                                        Susu+
                                    </Typography>
                                    <Grid container={true} justifyContent="center">
                                        <Grid item={true}>
                                            <img alt="" title="" className={classes.success} src="/assets/success.png"/>
                                        </Grid>
                                    </Grid>
                                    <Typography mb={2} variant="h6" align="center">
                                        Account Verification
                                    </Typography>
                                    {message &&
                                    <Alert severity="success" variant="standard">
                                        <AlertTitle>{message}</AlertTitle>
                                    </Alert>
                                    }
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default VerificationSuccessPage;
