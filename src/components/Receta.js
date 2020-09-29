import React,{useContext,useState} from 'react';
import {ModalContext} from '../Context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    //Usamos el context
    const {guardarIdReceta,recetainfo,setReceta} = useContext(ModalContext)

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
        guardarIdReceta(null);
        setReceta({});
    };

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={receta.strDrink}/>
                <div className="card-body">
                    <button
                        className="btn btn-block btn-primary"
                        onClick={()=>{
                            guardarIdReceta(receta.idDrink);
                            handleOpen(true)
                        }}
                    >
                        Ver Receta
                    </button>
                </div>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">{recetainfo.strDrink}</h2>
                        <p id="simple-modal-description">
                            {recetainfo.strInstructions}
                        </p>
                        <img src={recetainfo.strDrinkThumb} alt={recetainfo.strDrink} className="img-fluid"/>

                    </div>
                </Modal>
            </div>
        </div>
     );
}
 
export default Receta;