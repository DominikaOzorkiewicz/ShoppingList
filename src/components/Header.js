import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Container, ButtonGroup, Button } from "@material-ui/core";
import logo from '../logo.svg';

export const Header = ({ changeLanguage, t }) => {

    const useStyles = makeStyles((theme) => ({
        appBar: {
            zIndex: theme.zIndex.drawer +1,
        },
        logo: {
            width: '25px',
            height: '25px',
            marginRight: '10px'
        },
    }));
    const classes = useStyles();

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                <Container maxWidth='md'>
                    <Typography variant='h6'>
                        <img
                            className={classes.logo}
                            src={logo}
                            alt='Logo'
                        />
                        {t("title")}
                    </Typography>
                </Container>
                <ButtonGroup
                    size='small'
                    color='primary'
                    variant="contained"
                    orientation='horizontal'
                    disableElevation
                >
                    <Button onClick={() => changeLanguage('en')}>
                        <img
                            src={"assets/en.png"}
                            title='English'
                            alt='UK Flag'
                        />
                    </Button>
                    <Button onClick={() => changeLanguage('pl')}>
                        <img
                            src={"assets/pl.png"}
                            title='Polski'
                            alt='Polish Flag'
                        />
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    );
}