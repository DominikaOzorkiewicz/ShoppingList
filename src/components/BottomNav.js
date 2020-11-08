import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction, Drawer, Hidden} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ListAltIcon from "@material-ui/icons/ListAlt";
import GroupIcon from "@material-ui/icons/Group";

export const BottomNav = () => {
    const [value, setValue] = useState(0);

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

    return (
        <Hidden only={['xl', 'lg', 'md', 'sm']}>
            <Drawer
                anchor={'bottom'}
                variant="permanent"
            >
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    showLabels
                >
                    {itemsList.map((item, index) => (
                        <BottomNavigationAction key={index} label={item.text} icon={item.icon} />
                    ))}
                </BottomNavigation>
            </Drawer>
        </Hidden>
    );
}