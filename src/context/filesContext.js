import React, {useState, createContext} from 'react'

export const FilesContext = createContext();

export const FilesProvider = (props) => {
    const [pollo, setPollo] =useState()

    return(
        <FilesContext.Provider value ={{
            pollo,
            setPollo
        }}>
            {props.children}
        </FilesContext.Provider>
    )
}