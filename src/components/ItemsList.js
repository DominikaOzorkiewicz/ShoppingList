import React from 'react';
import { Container, List, Button } from "@material-ui/core";
import {Item} from "./Item";

export const ItemsList = ({ items, toggleBoughtFn, clearListFn, deleteItemFn, t }) => {

    const handleClearList = () => clearListFn();

    return (
        <Container fixed maxWidth='md'>
            <List>
                {items.map((product) => (
                    <Item
                        key={product.id}
                        item={product}
                        toggleBoughtFn={toggleBoughtFn}
                        deleteItemFn={deleteItemFn}
                        t={t}
                    />
                ))}
            </List>
            {items.length > 0 && (
                <Button variant='contained' color='secondary' onClick={handleClearList}>
                    {t("button.clear")}
                </Button>
            )}
        </Container>
    );
}