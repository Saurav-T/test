import { createContext } from "react";

export let MyContext = createContext()

export const MyContextProvider = ({ children}) => {
    return (
        <MyContext.Provider value={
         "John Doe" }>
            {children}
        </MyContext.Provider>
    )
}