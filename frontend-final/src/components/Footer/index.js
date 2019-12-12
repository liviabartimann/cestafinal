import React, { Component } from 'react';

// Importação do CSS do footer
import './index.css';

// Componente do Rodapé
export default class Footer extends Component {
    render() {
        return (
            // Tag Footer (radapé) e um P (parágrafo) com o seu texto
            <footer className='footer'>
                <p className='footer-text'>Copyright © Website 2019</p>
            </footer>
        )
    }
}