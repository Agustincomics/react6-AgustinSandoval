import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemColor from "./ItemColor";
/* import ItemTarea from "./ItemTarea"; */

const ListaColores = ({listadoColores, borrarColor}) => {
    return (
            <ListGroup>
                {
                    listadoColores.map((color, indice)=> <ItemColor key={indice} color={color} borrarColor={borrarColor}></ItemColor>)
                }

            </ListGroup>
    );
};

export default ListaColores;