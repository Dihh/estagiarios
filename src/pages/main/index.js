import React from 'react';

import './style.css';
import { Link, Redirect } from 'react-router-dom'
import api from '../../api'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

export default class LoginPage extends React.Component {
    state = {
        user: {},
        redirect: false,
        date: '',
        chegada: '00:00',
        almoco: '00:00',
        saida: '00:00',
    }
    changeDate = async (event) => {
        const date = event.target.value
        this.setState({ date })
        const apontamento = await api.getApontamento(localStorage.getItem('estagiariosSession'), date)
        const chegada = apontamento ? apontamento.CHEGADA : '00:00'
        const almoco = apontamento ? apontamento.ALMOCO : '00:00'
        const saida = apontamento ? apontamento.SAIDA : '00:00'
        this.setState({ chegada, almoco, saida })
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

    }
    render() {

        return <div className="content">
            <div className="content-bg">
                <div className="nav-button">
                    {this.renderRedirect()}
                </div>
                <div className="nav-user">
                    <div className="user-img">
                        <div className="img"></div>
                    </div>
                    <div className="user-name">
                        {this.state.user.NOME}
                    </div>
                    <div className="user-logOut">
                        <Link to="./"><i className="fa fa-sign-out"></i></Link>
                    </div>
                </div>

            </div>
            <div className="content-form">
                <form onSubmit={async e => {
                    e.preventDefault()
                    const { date, chegada, almoco, saida } = e.target.elements;
                    const apontamento = await api.setApontamento(localStorage.getItem('estagiariosSession'), date.value, chegada.value, almoco.value, saida.value)
                    alert('Apontamento Realizado com sucesso!');
                }}>
                    <div className="logo">Apontar Hora</div>
                    <div className="form-group">
                        <label htmlFor="date">Data:</label>
                        <input type="date" id="date" className="form-control" value={this.state.date} onChange={this.changeDate} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="chegada">Chegada:</label>
                        <input type="time" id="chegada" className="form-control" value={this.state.chegada} onChange={event => this.setState({ chegada: event.target.value })} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="almoco">Almoço:</label>
                        <input type="time" id="almoco" className="form-control" value={this.state.almoco} onChange={event => this.setState({ almoco: event.target.value })} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="saida">Saída:</label>
                        <input type="time" id="saida" className="form-control" value={this.state.saida} onChange={event => this.setState({ saida: event.target.value })} ></input>
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
