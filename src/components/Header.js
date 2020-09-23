import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import logo from '../logo.svg';

export const Header = () => {

    return (
        <AppBar position='static'>
            <Toolbar>
                <Container maxWidth='md' >
                    <Typography variant='h6'>
                        <img
                            src={logo}
                            alt='Logo'
                            style={{width: '25px', height: '25px', marginRight: '10px'}}
                        />
                        Shopping List
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}