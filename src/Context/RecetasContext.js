import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios'


export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [busqueda,obtenerBusqueda] =  useState({
        ingrediente:'',
        categoria:''
    })

    const [recetas,guardarRecetas] = useState([])
    const [consultar,guardarConsultar] = useState(false)

    const {ingrediente,categoria} = busqueda;

    useEffect(()=>{

        if(consultar){
            const obtenerRecetas = async() =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`
                const resultados = await axios(url)
    
                guardarRecetas(resultados.data.drinks)
    
            }
            obtenerRecetas()
            guardarConsultar(false)
        }
    },[busqueda,consultar])

    return (  
        <RecetasContext.Provider
            value={{
                recetas,
                obtenerBusqueda,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;