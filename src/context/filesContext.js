import React, {useState, createContext} from 'react'

export const FilesContext = createContext();

export default function FilesProvider (props) {
    const [pollo, setPollo] =useState()
    const [user, setUser] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <FilesContext.Provider value ={{
            pollo,
            setPollo,
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