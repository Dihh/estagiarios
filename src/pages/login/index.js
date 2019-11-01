import React from 'react';

import './style.css';
import { Link } from 'react-router-dom'

export default class LoginPage extends React.Component {

    onSubmit = () => {
        console.log('here')
    }

    render() {

        return <div className="content">
            <div className="content-bg"></div>

            <div className="content-form">
                <form onSubmit={e => {
                    e.preventDefault()
                    const { user, password } = e.target.elements
                }}>
                    <div className="logo">Login</div>
                    <div className="form-group">
                        <label htmlFor="user">Usuário:</label>
                        <input type="text" id="user" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" className="form-control" ></input>
                    </div>
                    <div className="div-btn">
                        <Link to="./cadastro"><button type="button" className="btn btn-info">Cadastro</button></Link>
                        <Link to="./main"><button type="submit" className="btn btn-primary">Enviar</button></Link>

                    </div>
                </form>
            </div>
        </div>

    }
}
