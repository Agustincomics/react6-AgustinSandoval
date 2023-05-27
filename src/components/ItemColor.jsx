import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemColor = ({color, borrarColor}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {color}
            <Button variant="danger" onClick={()=> borrarColor(color)}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemColor;