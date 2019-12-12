import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom';

import Footer from '../../components/Footer/index';


export default class NewUser extends Component {
    state = {
        aumont: '',
        description: '',
        uniqueValue: '',
        from: false,
        path: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { aumont, description, uniqueValue } = this.state;

        if (aumont === '' ||
            description === '' ||
            uniqueValue === '')
            return alert('Há campos obrigatórios em branco!');

        try {
            const token = await localStorage.getItem('token');
            fetch('http://localhost:3000/createItem', {
            method: 'POST',
            body: JSON.stringify({
                aumont: this.state.aumont,
                uniqueValue: 'R$ ' + this.state.uniqueValue,
                description: this.state.description
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            .catch(err => { console.log(err) })

            alert("Item Cadastrado com Sucesso");
            this.redirecionar();

        } catch (err) {
            alert("Erro no Cadastro");
            console.log(err);
        }
    }

    redirecionar = () =>{
        this.setState({path: "/cesta"})
        this.setState({ from: true });
    }

    render() {
        if (this.state.from) {
            return <Redirect to={this.state.path} />
        }
        return (
            <div className='container'>
                <div className='div-logo'>
                    <img className='logo' src='/images/cesta.png' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>Novo Item</p>
                <form className='form register'>
                    <input type='number'
                        placeholder='Quantidade do Item...'
                        value={this.state.aumont}
                        onChange={e => this.setState({ aumont: e.target.value })}
                        className="input" />
                    <input type='text'
                        placeholder='Descrição do Item...'
                        value={this.state.description}
                        onChange={e => this.setState({ description: e.target.value })}
                        className="input" />
                    <input type='text'
                        placeholder='Valor Unitário'
                        value={this.state.uniqueValue}
                        onChange={e => this.setState({ uniqueValue: e.target.value })}
                        className="input" />
                    <button className='button-submit' type='submit' onClick={this.handleSubmit}>
                        Cadastrar Item
                        <img className='button-seta' src='/images/seta-direita.png' alt='seta-direita' />
                    </button>
                </form>
                <Link className='link' to={'/cesta'}><button className='button-submit' type='submit'>
                    Voltar
                        <img className='button-seta' src='/images/seta-esquerda.png' alt='seta-direita' />
                </button>
                </Link>
                <Footer />
            </div>
        )
    }
}