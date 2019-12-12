import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom';

import Footer from '../../../components/Footer/index';


export default class NewUser extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        from: false,
        path: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = this.state;

        if (name === '' ||
            email === '' ||
            password === '')
            return alert('Há campos obrigatórios em branco!');

        try {
            const token = await localStorage.getItem('token');
            fetch('http://localhost:3000/createUser', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                isAdmin: this.state.isAdmin
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            .catch(err => { console.log(err) })

            alert("Usuário Cadastrado com Sucesso");
            this.redirecionar();

        } catch (err) {
            alert("Erro no Cadastro");
            console.log(err);
        }
    }

    redirecionar = () =>{
        this.setState({path: "/users"})
        this.setState({ from: true });
    }

    render() {
        if (this.state.from) {
            return <Redirect to={this.state.path} />
        }
        return (
            <div className='container'>
                <div className='div-logo'>
                    <img className='logo' src='/images/users.png' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>Novo Usuário</p>
                <form className='form register'>
                    <input type='text'
                        placeholder='Nome'
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        className="input" />
                    <input type='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        className="input" />
                    <input type='password'
                        placeholder='Senha'
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        className="input" />
                    <button className='button-submit' type='submit' onClick={this.handleSubmit}>
                        Efetuar Cadastro
                        <img className='button-seta' src='/images/seta-direita.png' alt='seta-direita' />
                    </button>
                </form>
                <Link className='link' to={'/homeAdmin'}><button className='button-submit' type='submit'>
                    Voltar
                        <img className='button-seta' src='/images/seta-esquerda.png' alt='seta-direita' />
                </button>
                </Link>
                <Footer />
            </div>
        )
    }
}