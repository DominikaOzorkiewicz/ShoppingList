import React from 'react';
import './scss/main.scss';
import {Header} from "./components/Header";
import {NewItemForm} from "./components/NewItemForm";
import {ItemsList} from "./components/ItemsList";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {useTranslation} from "react-i18next";

const App = () => {
    const [items, setItems] = useLocalStorage('itemsList', []);
    // Function to translate content (t), instance to change the language (i18n)
    const [t, i18n] = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    // Add new product to items array
    const addProduct = (product) => {
        setItems([...items, product]);
    }

    // Mark product as bought or not bought
    const toggleBought = (id) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                item.bought = !item.bought;
            }
            return item;
        });
        setItems(updatedItems);
    }

    // Delete product from shopping list
    const deleteItem = (id) => {
        const updatedItem = [...items].filter(item => item.id !== id);
        setItems(updatedItem);
    }

    // Clear shopping list
    const clearList = () => {
        setItems([]);
    }

    return (
        <div className="App">
            <Header changeLanguage={changeLanguage} t={t} />
            <NewItemForm addProductFn={addProduct} t={t} />
            <ItemsList items={items} toggleBoughtFn={toggleBought} clearListFn={clearList} deleteItemFn={deleteItem} t={t} />
        </div>
    );
}

export default App;
