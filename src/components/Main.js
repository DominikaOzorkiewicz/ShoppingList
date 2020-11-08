import React from 'react';
import {Container} from "@material-ui/core";
import {NewItemForm} from "./NewItemForm";
import {ItemsList} from "./ItemsList";

export const Main = ({ addProductFn, items, toggleBoughtFn, clearListFn, deleteItemFn, t }) => {

    return (
        <Container fixed maxWidth='md' disableGutters>
            <NewItemForm addProductFn={addProductFn} t={t} />
            <ItemsList
                items={items}
                toggleBoughtFn={toggleBoughtFn}
                clearListFn={clearListFn}
                deleteItemFn={deleteItemFn}
                t={t}
            />
        </Container>
    );
}