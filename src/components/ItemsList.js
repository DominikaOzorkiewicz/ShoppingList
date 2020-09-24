import React from 'react';
import { Container, List, Button } from "@material-ui/core";
import {Item} from "./Item";

export const ItemsList = ({ items, toggleBoughtFn, clearListFn, deleteItemFn }) => {

    const handleClearList = () => clearListFn();

    return (
        <Container maxWidth='md'>
            <List>
                {items.map((product) => (
                    <Item
                        key={product.id}
                        item={product}
                        toggleBoughtFn={toggleBoughtFn}
                        deleteItemFn={deleteItemFn}
                    />
                ))}
            </List>
            {items.length > 0 && (
                <Button variant='contained' color='secondary' onClick={handleClearList}>
                    Clear
                </Button>
            )}
        </Container>
    );
}