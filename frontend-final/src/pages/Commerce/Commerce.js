import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
import Footer from '../../components/Footer/index';
import ListCommerce from './ListCommerce';

// Importação do CSS
// import './index.css'

// Componente de Cadastro (Imagem do Topo, Formulário de Cadastro, Botão de Cadastrar, Link para o Login)
export default class Commerce extends Component {

    state = {
        commerces: []
    }

    componentDidMount() {
        this.loadCommerces();
    }

    loadCommerces = async () => {
        const token = await localStorage.getItem('token')
        fetch('http://localhost:3000/commerces', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.setUsers(data) })
            .catch(err => { console.log(err) })
    }

    setUsers = (data) => {
        console.log(data)
        this.setState({ commerces: data })
        console.log(this.state.commerces)
    }

    render() {
        return (
            <div className='container'>
                <div className='div-logo'>
                    <img className='card-logo' src='/images/commerce.png' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>Manter Comércios</p>
                <div className='div-container'>
                <Link className='link' to={'/newCommerce'}> <button className='button-submit' type='submit'>
                    Novo Comércio
                        <img className='button-seta' src='/images/plus.svg' alt='novo-user' />
                </button>
                </Link> 
                </div>
                <div>
                <div className="users-card">
                    <p className='user'>Identificação</p>
                    <p className='user'>Endereço (Logradouro, número)</p>
                    <div className='buttons-user-actions'>
                        <p className='button-action'>Excluir</p>
                    </div>
                </div>
                <div className='card-users'>{this.state.commerces.map(commerce => (<ListCommerce key={commerce._id} commerce={commerce} />))}</div>
                </div>
                <Link className='link' to={'/homeAdmin'}> <button className='button-submit' type='submit'>
                    Voltar
                        <img className='button-seta' src='/images/seta-esquerda.png' alt='seta-direita' />
                </button>
                </Link>
                <Footer />
            </div>
        )
    }
}