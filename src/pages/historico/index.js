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
                <div className="nav-button">

                </div>
                <div className="nav-user">
                    <div className="user-img">
                        <div className="img"></div>
                    </div>
                    <div className="user-name">
                        Name
                    </div>
                    <div className="user-logOut">
                        <Link to="./"><i class="fa fa-sign-out"></i></Link>
                    </div>
                </div>

            </div>
            <div className="content-form">
                <div className="table">
                    <div className="logo">Histórico</div>
                    <div className="form-group">
                        <input type="month" id="mes" className="form-control" ></input>
                    </div>
                    <div className="table-historico">
                        <div className="row">
                            <div><b>Chegada</b></div>
                            <div><b>Almoço</b></div>
                            <div><b>Saída</b></div>
                        </div>
                        <div className="row">
                            <div>a</div>
                            <div>b</div>
                            <div>c</div>
                        </div>
                        <div className="row">
                            <div>a</div>
                            <div>b</div>
                            <div>c</div>
                        </div>
                    </div>
                    <div className="div-btn">
                        <Link to="./main"><button type="button" className="btn btn-info">Voltar</button></Link>

                    </div>
                </div>
            </div>


        </div>

    }
}
