import React, {useState} from 'react';
import './scss/main.scss';
import {Header} from "./components/Header";
import {NewItemForm} from "./components/NewItemForm";
import {ItemsList} from "./components/ItemsList";

const App = () => {
    const [items, setItems] = useState([]);

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

    // Clear shopping list
    const clearList = () => {
        setItems([]);
    }

    return (
        <div className="App">
            <Header />
            <NewItemForm addProductFn={addProduct} />
            <ItemsList items={items} toggleBoughtFn={toggleBought} clearListFn={clearList} />
        </div>
    );
}

export default App;