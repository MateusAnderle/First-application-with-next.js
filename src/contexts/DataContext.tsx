import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const DataContext = createContext({});

export function DataContextProvider({children}){
    const [ loading, setLoading ] = useState(true);
    const [cartData, setCartData] = useState([]);
    const { loadLocalStorage } = useLocalStorage();


    async function fetchData(){
      const dataFetched = loadLocalStorage('@ignite-shop:cart');
      dataFetched === undefined ? setCartData([]) : setCartData(dataFetched) 
    }

    return (
        <DataContext.Provider 
          value={{ 
            fetchData,
            cartData,
            loading, 
            setLoading,
            setCartData
          }}
        >
            {children}
        </DataContext.Provider>
    )
}
