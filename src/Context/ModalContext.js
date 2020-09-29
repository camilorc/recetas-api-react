import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios'

//Creamos el Context
export const ModalContext = createContext()

//Creamos el Provider
const ModalProvider = (props) => {

    //State ID
    const [idreceta,guardarIdReceta] = useState(null)

    const [recetainfo,setReceta] = useState({})

    useEffect(()=>{

        if(!idreceta) return;

        const ObtenerDetalleReceta = async() => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const respuesta = await axios.get(url)

            console.log(respuesta.data.drinks[0])
            setReceta(respuesta.data.drinks[0])

        }
        ObtenerDetalleReceta()

    },[idreceta])


    return (  
        <ModalContext.Provider
            value={{
                recetainfo,
                guardarIdReceta,
                setReceta
                
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;