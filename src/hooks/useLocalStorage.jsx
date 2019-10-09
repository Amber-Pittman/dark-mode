import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [something, setSomething] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue; 
    });


    // setter function
    const setValue = value => { // this is a wrapper around the setSomething setter
        setSomething(value); // saves state
        window.localStorage.getItem(key, JSON.stringify(value)); // JSON parses into a string
    }

    return [something, setValue];
}