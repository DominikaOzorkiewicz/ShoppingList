import {useState} from "react";

// Custom Hook for loading and updating data in Local Storage
export const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(() => {
        try {
            const localStorageJSON = localStorage.getItem(key);
            return localStorageJSON ? JSON.parse(localStorageJSON) : initValue;
        } catch (error) {
            return initValue;
        }
    });

    const updateValue = (value) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [value, updateValue];
}