import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {

    // const [isPageLoading, setPageLoading] = useState('initial');
    // !here 
    const [isPageLoading, setPageLoading] = useState(false);

    const [InvokeBodyHeightFunc, setInvokeBodyHeightFunc] = useState(null)

    const data = {
        InvokeBodyHeightFunc,
        setInvokeBodyHeightFunc,
        isPageLoading,
        setPageLoading,
    };

    return (<StoreContext.Provider value={data}>{children}</StoreContext.Provider>)
}