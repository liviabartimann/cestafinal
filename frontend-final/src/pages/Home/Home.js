import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
// import Footer from '../../components/Footer/index';

// Importação do CSS
import './index.css'

// Componente de Cadastro (Imagem do Topo, Formulário de Cadastro, Botão de Cadastrar, Link para o Login)
export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='div-logo'>
                    <img className='card-logo' src='/images/admin.png' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>Usuário Padrão</p>
                <div className='div-container'>
                    <div className='div-cards'>
                        <div className='div-column'>
                            <Link className='link-stylist' to={'/cesta'}>
                                <button className='button-card'>
                                    <div className='div-card-logo'>
                                        <img className='card-logo' src='/images/cesta.png' alt='imagem de logo' />
                                    </div>
                                    <p className='title-card'>Manter Cesta Básica</p>
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className='div-cards'>
                        <div className='div-column'>
                        <Link className='link-stylist' to={'/monthlyQuote'}>
                            <button className='button-card'>
                                <div className='div-card-logo'>
                                    <img className='logo' src='/images/quote.png' alt='imagem de logo' />
                                </div>
                                <p className='title-card'>Cotação Mensal</p>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link className='link' to={'/'}> <button className='button-submit' type='submit'>
                    Sair
                        <img className='button-seta' src='/images/seta-esquerda.png' alt='seta-direita' />
                </button>
                </Link>
                {/* <Footer /> */}
            </div>
        )
    }
}