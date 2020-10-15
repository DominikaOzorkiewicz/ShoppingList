import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Container, ButtonGroup, Button } from "@material-ui/core";
import logo from '../logo.svg';

export const Header = ({ changeLanguage, t }) => {

    const styles = makeStyles(() =>
        createStyles({
            logo: {
                width: '25px',
                height: '25px',
                marginRight: '10px'
            },
            languageButtons: {
                border: '1px solid #bdbdbd',
            },
            languageButton: {
                fontSize: '0.55rem',
            },
    }));
    const classes = styles();

    return (
        <AppBar position='static'>
            <Toolbar>
                <Container maxWidth='md' >
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
                    className={classes.languageButtons}
                    size='small'
                    color='primary'
                    variant="contained"
                    orientation='horizontal'
                    disableElevation
                >
                    <Button
                        className={classes.languageButton}
                        onClick={() => changeLanguage('en')}
                    >
                        English
                    </Button>
                    <Button
                        className={classes.languageButton}
                        onClick={() => changeLanguage('pl')}
                    >
                        Polski
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    );
}