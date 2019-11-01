import React from 'react';

import './style.css';
import { Link, Redirect } from 'react-router-dom'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import api from '../../api'
import HeadComponent from '../../components/headComponent'

export default class LoginPage extends React.Component {
    state = {
        user: {},
        apontamentos: [],
        redirect: false,
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='./' />
        }
    }

    async componentDidMount() {
        const user = await api.getSession(localStorage.getItem('estagiariosSession'));
        if (user) {
            user.NOME = user.NOME ? user.NOME.split(' ')[0] : '';
            this.setState({
                user
            })
        } else {
            this.setState({
                redirect: true
            })
        }

        const apontamentos = await api.getHistorico(localStorage.getItem('estagiariosSession'));
        apontamentos.forEach(el => {
            let data = new Date(el.DATA);
            el.DATA = data.toLocaleDateString();
        })
        this.setState({ apontamentos })
    }

    render() {

        return <div className="content">
            {this.renderRedirect()}
            <div className="content-bg">
                <HeadComponent nome={this.state.user.NOME} />
            </div>
            <div className="content-form">
                <div className="table">
                    <div className="logo">Histórico</div>
                    {/* <div className="form-group">
                        <input type="month" id="mes" className="form-control" ></input>
                    </div> */}
                    <div className="table-historico">
                        <div className="row">
                            <div><b>Data</b></div>
                            <div><b>Chegada</b></div>
                            <div><b>Almoço</b></div>
                            <div><b>Saída</b></div>
                        </div>
                        {
                            this.state.apontamentos.map(el => {
                                return <div className="row">
                                    <div>{el.DATA}</div>
                                    <div>{el.CHEGADA}</div>
                                    <div>{el.ALMOCO}</div>
                                    <div>{el.SAIDA}</div>
                                </div>
                            })
                        }

                    </div>
                    <div className="div-btn">
                        <Link to="./main"><button type="button" className="btn btn-info">Voltar</button></Link>

                    </div>
                </div>
            </div>


        </div>


    }
}
