import React, {useState} from 'react';
import './scss/main.scss';
import {Header} from "./components/Header";
import {NewItemForm} from "./components/NewItemForm";

const App = () => {
    const [items, setItems] = useState([]);

    // Add new product to items array
    const addProduct = (product) => {
        setItems([...items, product]);
    }

    return (
        <div className="App">
            <Header />
            <NewItemForm addProductFn={addProduct} />
        </div>
    );
}

export default App;
