import React from 'react'
import animais from './animais-rapidos.png'
import './Inicio.css'

const Inicio = () => {
    return(
        <div>
            <div className="container">
                <h2 className="title">Teste aqui seu conhecimento sobre animais!</h2>
                <a href="/teste">Clique aqui</a>
            </div>
        </div>
    );
}

export default Inicio;