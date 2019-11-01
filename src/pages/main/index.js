import React from 'react';

import './style.css';
import { Link } from 'react-router-dom'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

export default class LoginPage extends React.Component {

    onSubmit = () => {
        console.log('here')
    }

    render() {

        return <div className="content">
            <div className="content-bg">
                <div class="nav-button">

                </div>
                <div class="nav-user">
                    <div class="user-img">
                        <div class="img"></div>
                    </div>
                    <div class="user-name">
                        Name
                    </div>
                    <div class="user-logOut">
                        <Link to="./"><i class="fa fa-sign-out"></i></Link>
                    </div>
                </div>

            </div>
            <div className="content-form">
                <form onSubmit={e => {
                    e.preventDefault()
                    const { user, password } = e.target.elements
                }}>
                    <div className="logo">Apontar Hora</div>
                    <div className="form-group">
                        <label htmlFor="date">Data:</label>
                        <input type="date" id="date" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="chegada">Chegada:</label>
                        <input type="time" id="chegada" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="almoco">Almoço:</label>
                        <input type="time" id="almoco" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="saida">Saída:</label>
                        <input type="time" id="saida" className="form-control" ></input>
                    </div>
                    <div className="div-btn">
                        <Link to="./historico"><button type="button" className="btn btn-info">Histórico</button></Link>
                        <button type="submit" className="btn btn-primary">Enviar</button>

                    </div>
                </form>
            </div>


        </div>

    }
}
