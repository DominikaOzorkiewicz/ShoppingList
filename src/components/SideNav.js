import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";

import AddIcon from '@material-ui/icons/Add';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupIcon from '@material-ui/icons/Group';

export const SideNav = () => {
    const itemsList = [
        {
            text: 'New list',
            icon: <AddIcon />,
        },
        {
            text: 'My lists',
            icon: <ListAltIcon />,
        },
        {
            text: 'Share list',
            icon: <GroupIcon />,
        }
    ];

    const drawerWidth = 200;

    const useStyles = makeStyles((theme) => ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
    }));
    const classes = useStyles();


    return (
        <Hidden only={['xs']}>
            <Drawer
                variant="permanent"
                anchor="left"
                className={classes.drawer}
                classes={{paper: classes.drawerPaper}}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {itemsList.map((item, index) => (
                            <ListItem button key={item.text}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </Hidden>
    );
}