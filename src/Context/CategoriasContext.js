import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios'

//Crear el Context
export const CategoriasContext = createContext()


//Provider donde se encuentran las funciones y states
const CategoriasProvider = (props) => {

    const [categorias,guardarCategorias] = useState([])

    useEffect(()=>{

        const obtenerCategoriasAPI = async() => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios(url)

            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategoriasAPI();

    },[])


    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;