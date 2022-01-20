import React, {useState, createContext} from 'react'

export const FilesContext = createContext();

export const FilesProvider = (props) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <FilesContext.Provider value ={{
            email,
            setEmail,
            password,
            setPassword,
            user,
            setUser,
        }}>
            {props.children}
        </FilesContext.Provider>
    )
}