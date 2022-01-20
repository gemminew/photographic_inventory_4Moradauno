import React, {useState, createContext} from 'react'

export const FilesContext = createContext();

export const FilesProvider = (props) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [propiedades, setPropiedades] = useState(null);
    const [infoUser, setInfoUser] = useState()

    return(
        <FilesContext.Provider value ={{
            email,
            setEmail,
            password,
            setPassword,
            user,
            setUser,
            propiedades,
            setPropiedades,
            infoUser,
            setInfoUser
        }}>
            {props.children}
        </FilesContext.Provider>
    )
}