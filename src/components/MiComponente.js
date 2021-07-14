import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        let receta = {
            nombre: 'pizza',
            ingredientes: ['tomate', 'queso', 'jamon'],
            calorias: 400
        }
        return (
            <div className ="mi-componente">
                <h1>{'receta:' + receta.nombre}</h1>
                <h1>{'calorias:'+ receta.calorias}</h1>
                <h1>hola soy un componente</h1>
                <h2>probando componentes</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i) => {
                            console.log(ingredientes);
                            return (
                                <li key={i}>
                                    {ingredientes}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
            
        );
    }

}

export default MiComponente;