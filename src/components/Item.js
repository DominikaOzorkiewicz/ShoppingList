import React from 'react';
import { ListItem, ListItemIcon, Checkbox, ListItemText, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

export const Item = ({ item, toggleBoughtFn, deleteItemFn }) => {

    const handleBought = () => {
        if(typeof toggleBoughtFn === 'function') {
            toggleBoughtFn(item.id);
        }
    }

    const handleDeleteItem = () => {
        if(typeof deleteItemFn === 'function') {
            deleteItemFn(item.id);
        }
    }

    return (
        <ListItem dense button >

            <ListItemIcon onClick={handleBought}>
                <Checkbox
                    color='primary'
                    edge='start'
                    checked={item.bought}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText onClick={handleBought}>
                {item.name} - {item.quantity} {item.unit}
            </ListItemText>

            <IconButton aria-label="delete" onClick={handleDeleteItem}>
                <DeleteIcon fontSize="small" />
            </IconButton>

        </ListItem>
    );
}