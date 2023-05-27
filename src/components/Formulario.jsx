import {Form, Button} from 'react-bootstrap';
/* import ListaTareas from './ListaTareas'; */
import { useState, useEffect } from 'react';
import ListaColores from './ListaColores';

const Formulario = () => {
    const [color, setColor] = useState("");
    let colorLocalstorage = JSON.parse(localStorage.getItem('listaColores')) || [];
    const [listadoColores, setListadoColores] = useState(colorLocalstorage);

    //aqui creo mis funciones
    useEffect(()=>{
       // console.log(tarea);
       // console.log(listadoTareas);
       localStorage.setItem('listaColores', JSON.stringify(listadoColores))
    }, [listadoColores])

    const handleSubmit = (e)=>{
        e.preventDefault();
        setListadoColores([...listadoColores, color]);
        setColor("");
    }

    const borrarColor = (nombreColor)=>{
       let arregloFiltrado = listadoColores.filter((item)=> item !== nombreColor);
       setListadoColores(arregloFiltrado);
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="color">
                    <Form.Control type="color" placeholder="Ingrese Color" 
                    onChange={(e)=> setColor(e.target.value)}
                    value={color} />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaColores listadoColores={listadoColores} borrarColor={borrarColor}></ListaColores> 
        </section>
    );
};

export default Formulario;