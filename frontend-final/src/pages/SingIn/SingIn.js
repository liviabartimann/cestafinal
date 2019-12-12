import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../services/api'
// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
import Footer from '../../components/Footer/index';

// Importação do CSS
import '../index.css'

// Componente de Login (Imagem do Topo, Formulário de Login, Botão de Entrar, Link para Cadastro
// Link para Resetar Senha)
export default class SingIn extends Component {

    state = {
        typeUser: '',
        nome: '',
        email: '',
        password: '',
        from: false,
        path: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        if (email === '' || password === '')
            return alert('Há campos obrigatórios em branco!');

        try {
            const response = await api.post('/sessions', {
                email: this.state.email,
                password: this.state.password
            })

            await localStorage.setItem('token', response.data.token);

            if (response.data.user.isAdmin === false) {
                this.setState({ path: '/home' })
            } else {
                this.setState({ path: '/homeAdmin' })
            }

            console.log(this.state.path)
            this.setState({ from: true });
            alert('Autenticado com sucesso!')

        } catch (err) {
            alert("Erro no Login");
            console.log(err)
        }
    }

    render() {
        if (this.state.from) {
            return <Redirect to={this.state.path} />
        }
        return (
            <div className='container'>
                <div className='div-logo'>
                    <img className='logo' src='/images/icone.svg' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>Login</p>
                <form className='form login'>
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
                        Entrar
                        <img className='button-seta' src='/images/seta-direita.png' alt='seta-direita' />
                    </button>
                </form>
                <Footer />
            </div>
        )
    }
}