import React, {useState, createContext} from 'react'

export const FilesContext = createContext();

export const FilesProvider = (props) => {
    const [pollo, setPollo] =useState()

    return(
        <FilesProvider.Provider value ={{
            pollo,
            setPollo
        }}>
            {props}
        </FilesProvider.Provider>
    )
}