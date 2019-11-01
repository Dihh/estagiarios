import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import api from '../../api'

import './style.css';

export default class LoginPage extends React.Component {
    state = {
        redirect: false
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='./' />
        }
    }
    render() {
        return <div className="content">
            <div className="content-bg"></div>

            <div className="content-form">
                <form onSubmit={async e => {
                    e.preventDefault()
                    const { nome, user, password } = e.target.elements;
                    const ret = await api.cadastro(nome.value, user.value, password.value)
                    if (ret) {
                        this.setState({
                            redirect: true
                        })
                    }
                }}>
                    {this.renderRedirect()}
                    <div className="logo">Cadastro</div>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user">Usuário:</label>
                        <input type="text" id="user" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" className="form-control" ></input>
                    </div>
                    <div className="div-btn">
                        <Link to="./"><button type="button" className="btn btn-info">Voltar</button></Link>
                        <button type="submit" className="btn btn-primary">Enviar</button>

                    </div>
                </form>
            </div>
        </div>

    }
}
