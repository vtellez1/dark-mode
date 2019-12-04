import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValues) => {

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);

    useEffect(()=>{
        if(darkMode === true){
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [darkMode]);

    const toggleDarkMode = e => {
        e.preventDefault();
        return darkMode ? setDarkMode(false) : setDarkMode(true);
    }

    return [darkMode, setDarkMode, toggleDarkMode];
};