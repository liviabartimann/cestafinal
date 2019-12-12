import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
import Footer from '../../../components/Footer/index';
import ListUsers from './ListUsers';

// Importação do CSS
// import './index.css'

// Componente de Cadastro (Imagem do Topo, Formulário de Cadastro, Botão de Cadastrar, Link para o Login)
export default class Users extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = async () => {
        const token = await localStorage.getItem('token')
        fetch('http://localhost:3000/users', {
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
        this.setState({ users: data })
        console.log(this.state.users)
    }

    render() {
        return (
            <div className='container'>
                <div className='div-logo'>
                    <img className='card-logo' src='/images/users.png' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>Manter Usuários</p>
                <div className='div-container'>
                <Link className='link' to={'/newUser'}> <button className='button-submit' type='submit'>
                    Novo Usuário
                        <img className='button-seta' src='/images/plus.svg' alt='novo-user' />
                </button>
                </Link> 
                </div>
                <div>
                <div className="users-card">
                    <p className='user'>Nome</p>
                    <p className='user'>Email</p>
                    <div className='buttons-user-actions'>
                        <p className='button-action'>
                            Excluir
                    </p>
                    </div>
                </div>
                <div className='card-users'>{this.state.users.map(user => (<ListUsers key={user._id} user={user} />))}</div>
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