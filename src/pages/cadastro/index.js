import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default class LoginPage extends React.Component {

    Submit = () => {
        console.log('here')
    }

    render() {

        return <div className="content">
            <div className="content-bg"></div>

            <div className="content-form">
                <form onSubmit={e => {
                    e.preventDefault()
                    const { nome, user, password } = e.target.elements
                    console.log(nome.value, user.value, password.value)
                    this.Submit()
                }}>
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
