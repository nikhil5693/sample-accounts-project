import { useState, useEffect } from 'react';

const setSessionStorage = (name, val) => {
    sessionStorage.setItem(name, JSON.stringify(val));
};

const getSavedValue = (initialValue, name) => {
    const savedValue = sessionStorage.getItem(name);
    if (savedValue) return JSON.parse(savedValue);

    return initialValue;
}

export const useSessionStorage = (initialValue, name) => {
    const [val, setVal] = useState(() => {
        return getSavedValue(initialValue, name);
    });

    useEffect(() => {
        setSessionStorage(name, val);
    }, [val, name]);

    return [val, setVal];;
};