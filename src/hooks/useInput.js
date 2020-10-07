import {useState} from 'react';

// Custom Hook for saving info from input field
export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return [
        value,
        setValue,
        {
            value,
            onChange,
        }
    ];
}