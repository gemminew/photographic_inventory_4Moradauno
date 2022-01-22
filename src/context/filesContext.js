import React, {useState, createContext} from 'react'

import { firestore } from '../Firebase/config'
import {doc, getDoc} from 'firebase/firestore'

export const FilesContext = createContext();

export const FilesProvider = (props) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [propiedades, setPropiedades] = useState(null);
    const [infoUser, setInfoUser] = useState()
    const [fotografias, setFotografias] = useState()
    const [seccion, setSeccion] = useState("baño")
    const [propiedadQueSubeFotos, setPropiedadQueSubeFotos] = useState("2")
    const [infoPropiedad, setInfoPropiedad] = useState()

    async function getInfo (coleccion, idDocumento) {
        const docuRef= doc(firestore, `${coleccion}/${idDocumento}`)
        const consulta = await getDoc(docuRef)
        const infoDocu = consulta.data();
        return infoDocu
    }

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
            setInfoUser,
            fotografias,
            setFotografias,
            seccion,
            setSeccion,
            getInfo,
            propiedadQueSubeFotos,
            setPropiedadQueSubeFotos,
            infoPropiedad,
            setInfoPropiedad
        }}>
            {props.children}
        </FilesContext.Provider>
    )
}