import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const NotFoundPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            background: {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Box sx={{position: 'relative', minHeight: '100vh',}}>
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 10,
                        backgroundColor: 'rgba(0, 0, 0, .35)',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <Container
                        sx={{
                            color: 'white'
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 900,
                                color: 'white'
                            }}
                            mb={2}
                            variant="h1"
                            align="center">
                            404
                        </Typography>
                        <Typography
                            mb={2}
                            sx={{textTransform: 'uppercase'}}
                            variant="h4"
                            align="center">
                            Page Not Found
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center">
                            The page you're looking for isn't available
                        </Typography>
                    </Container>
                </Box>
                <img alt="" title="" src="/assets/background.jpg" className={classes.background}/>
            </Box>
        </Layout>
    )
}

export default NotFoundPage;
