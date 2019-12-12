import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
// import Footer from '../../components/Footer/index';
import ListItens from './ListItens';

// Importação do CSS
// import './index.css'

// Componente de Cadastro (Imagem do Topo, Formulário de Cadastro, Botão de Cadastrar, Link para o Login)
export default class Cesta extends Component {

    state = {
        itens: []
    }

    componentDidMount() {
        this.loadItens();
    }

    loadItens = async () => {
        const token = await localStorage.getItem('token')
        fetch('http://localhost:3000/listItem', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.setItens(data) })
            .catch(err => { console.log(err) })
    }

    setItens = (data) => {
        console.log(data)
        this.setState({ itens: data })
        console.log(this.state.itens)
    }

    render() {
        return (
            <div className='container'>
                <div className='div-logo'>
                    <img className='card-logo' src='/images/cesta.png' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>Cesta Básica</p>
                <div className='div-container'>
                <Link className='link' to={'/newItem'}> <button className='button-submit' type='submit'>
                    Novo Item
                        <img className='button-seta' src='/images/plus.svg' alt='novo-user' />
                </button>
                </Link> 
                </div>
                <div>
                <div className="users-card">
                <p className='user'>Quantidade</p>
                <p className='user'>Descrição</p>
                <p className='user'>Valor Unitário</p>
                <div className='buttons-user-actions'>
                    <p className='button-action'>
                        Excluir
                    </p>
                </div>
            </div>
                <div className='card-users'>{this.state.itens.map(item => (<ListItens key={item._id} item={item} />))}</div>
                </div>
                <Link className='link' to={'/home'}> <button className='button-submit' type='submit'>
                    Voltar
                        <img className='button-seta' src='/images/seta-esquerda.png' alt='seta-direita' />
                </button>
                </Link>
            </div>
        )
    }
}