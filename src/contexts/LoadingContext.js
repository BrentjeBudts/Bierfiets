import React, {createContext, useContext, useMemo, useState} from "react";

const LoadingContext = createContext();

export function LoadingProvider(props) {
    const [isLoading,setLoading] = useState(false);
    console.log({isLoading});

    const api = useMemo(() => ({
        isLoading, setLoading
    }), [isLoading, setLoading]);

    return <LoadingContext.Provider value={api}>
        {props.children}
    </LoadingContext.Provider>
}

export const useLoadingContext = () => useContext(LoadingContext);