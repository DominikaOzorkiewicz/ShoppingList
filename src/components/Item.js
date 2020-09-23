import React from 'react';
import { ListItem, ListItemIcon, Checkbox, ListItemText } from "@material-ui/core";
//import DeleteIcon from '@material-ui/icons/Delete';
//import CreateIcon from '@material-ui/icons/Create';

export const Item = ({ item, toggleBoughtFn }) => {

    const handleBought = () => {
        if(typeof toggleBoughtFn === 'function') {
            toggleBoughtFn(item.id);
        }
    }

    return (
        <ListItem dense button onClick={handleBought}>
            <ListItemIcon>
                <Checkbox
                    color='primary'
                    edge='start'
                    checked={item.bought}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText>
                {item.name} - {item.quantity} {item.unit}
            </ListItemText>

            {/*<IconButton aria-label="edit">
                <CreateIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon fontSize="small" />
            </IconButton> */}

        </ListItem>
    );
}