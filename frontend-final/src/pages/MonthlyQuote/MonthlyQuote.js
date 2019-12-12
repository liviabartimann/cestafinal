import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
// import Footer from '../../components/Footer/index';
import ListItens from '../Cesta Básica/ListItens';

// Importação do CSS
// import './index.css'

// Componente de Cadastro (Imagem do Topo, Formulário de Cadastro, Botão de Cadastrar, Link para o Login)
export default class Cesta extends Component {

    state = {
        itens: [],
        month: ''
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

    handleSubmit = async () => {
        try {
        const token = await localStorage.getItem('token')
        fetch('http://localhost:3000/monthlyQuote', {
            method: 'POST',
            body: {
                "month" : this.state.month
            },
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.setItens(data) })
            .catch(err => { console.log(err) })

            alert("Cotação Cadastrada com Sucesso");
            this.redirecionar();

        } catch (err) {
            alert("Erro no Cadastro");
            console.log(err);
        }
}

redirecionar = () =>{
    this.setState({path: "/home"})
    this.setState({ from: true });
}

render() {
    if (this.state.from) {
        return <Redirect to={this.state.path} />
    }
    return (
        <div className='container'>
            <div className='div-logo'>
                <img className='card-logo' src='/images/quote.png' alt='imagem de logo' />
            </div>
            <p className='page-identificator'>Cotação Mensal</p>
            <div className='div-container'>
                <select className='button-submit' type='submit'
                value={this.state.month}
                onChange={e => this.setState({ month: e.target.value })}>
                    <option>Selecionar Mês</option>
                    <option>Janeiro</option>
                    <option>Fevereiro</option>
                    <option>Março</option>
                    <option>Abril</option>
                    <option>Maio</option>
                    <option>Junho</option>
                    <option>Julho</option>
                    <option>Agosto</option>
                    <option>Setembro</option>
                    <option>Outubro</option>
                    <option>Novembro</option>
                    <option>Dezembro</option>
                    
                    </select>
            </div>
            <div>
                <div className="users-card">
                    <p className='user'>Quantidade</p>
                    <p className='user'>Descrição</p>
                    <p className='user'>Valor Unitário</p>
                    <div className='buttons-user-actions'>
                        <p className='button-action'>
                            Remover
                    </p>
                    </div>
                </div>
                <div className='card-users'>{this.state.itens.map(item => (<ListItens key={item._id} item={item} />))}</div>
            </div>
            <button className='button-submit' type='submit' onClick={this.handleSubmit}>
                Salvar
                        <img className='button-seta' src='/images/save.png' alt='seta-direita' />
            </button>
            <Link className='link' to={'/home'}> <button className='button-submit' type='submit'>
                Voltar
                        <img className='button-seta' src='/images/seta-esquerda.png' alt='seta-direita' />
            </button>
            </Link>
        </div>
    )
}
}