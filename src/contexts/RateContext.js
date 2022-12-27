import React, {createContext, useContext, useMemo, useState} from "react";

const RateContext = createContext();

export function RateProvider(props) {
    const [rate,setRate] = useState(3);
    console.log({rate});

    const api = useMemo(() => ({
        rate, setRate
    }), [rate, setRate]);

    return <RateContext.Provider value={api}>
        {props.children}
    </RateContext.Provider>
}

export const useRateContext = () => useContext(RateContext);