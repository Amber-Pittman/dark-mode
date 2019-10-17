import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
    const [dark, setDark] = useLocalStorage("dark"); // "dark" is a key
    useEffect(() => { // manipulate the DOM with useEffect
        
        // Is it dark?
        dark ? document.body.classList.add("dark-mode") : // if true, adds the class to the body element
            document.body.classList.remove("dark-mode") // if false, removes from body element
    }, [dark])

    return [dark, setDark]
}