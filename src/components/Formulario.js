import React,{useContext,useState} from 'react'
import {CategoriasContext} from '../Context/CategoriasContext'
import {RecetasContext} from '../Context/RecetasContext'


const Formulario = () => {

    const [busqueda,guardarBusqueda] = useState({
        ingrediente : '',
        categoria:''
    })
    const {categorias} = useContext(CategoriasContext)
    const {obtenerBusqueda,guardarConsultar} = useContext(RecetasContext)

    const obtenerBusquedaForm = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    return (  
        <form 
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                obtenerBusqueda(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingredientes</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Buscar por ingrediente"
                        name="ingrediente"
                        onChange={obtenerBusquedaForm}
                    />
                </div>

                <div className="col-md-4">
                    <select 
                        className="form-control" 
                        name="categoria"
                        onChange={obtenerBusquedaForm}
                    >
                        <option value="">-- Seleccionar categoría --</option>
                        {categorias.map(cate => (
                            <option 
                                key={cate.strCategory}
                                value={cate.strCategory}
                            >
                            {cate.strCategory}</option>
                        ))}
                        
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar bedida"
                    />
                </div>


            </div>


        </form>
    );
}
 
export default Formulario;