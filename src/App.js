import React from 'react';
import './scss/main.scss';
import {Header} from "./components/Header";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {useTranslation} from "react-i18next";
import {BottomNav} from "./components/BottomNav";
import {SideNav} from "./components/SideNav";
import {Main} from "./components/Main";

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
        <div className="App" style={{display: 'flex'}}>
            <Header changeLanguage={changeLanguage} t={t} />
            <SideNav />
            <Main
                items={items}
                toggleBoughtFn={toggleBought}
                clearListFn={clearList}
                deleteItemFn={deleteItem}
                t={t}
                addProductFn={addProduct}
            />
            <BottomNav />
        </div>
    );
}

export default App;
