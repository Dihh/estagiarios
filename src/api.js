const md5 = require('md5');
const axios = require('axios');
const SERVER = 'http://localhost/estagiariosApi/api/v1/';

export default {

    axios: axios.create({
        baseURL: SERVER
    }),
    async login(user, password) {
        const params = new URLSearchParams();
        params.append('user', user);
        params.append('password', md5(password));
        const data = await this.axios.post('/users/login', params)
        const status = data.data.status;
        if (status == 'sucesso') {
            localStorage.setItem('estagiariosSession', data.data.dados[0].TOKEN)
            return true;
        } else {
            alert(data.data.dados);
            return false;
        }
    },
    async getSession(token) {
        const params = new URLSearchParams();
        params.append('token', token);
        const data = await this.axios.post('/users/getSession', params)
        const status = data.data.status;
        if (status == 'sucesso') {
            return data.data.dados[0];
        } else {
            alert(data.data.dados);
            return false;
        }
    },
    async cadastro(nome, user, password) {
        const params = new URLSearchParams();
        params.append('name', nome);
        params.append('user', user);
        params.append('password', md5(password));
        const data = await this.axios.post('/users/cadastro', params)
        const status = data.data.status;
        if (status == 'sucesso') {
            alert('Usuário cadastrado com sucesso!');
            return true;
        } else {
            alert(data.data.dados);
            return false;
        }

    },
    async getApontamento(token, date) {
        const params = new URLSearchParams();
        params.append('token', token);
        params.append('data', date);
        const data = await this.axios.post('/apontamentos/getApontamento', params)
        const status = data.data.status;
        if (status == 'sucesso') {
            return data.data.dados[0];
        } else {
            alert(data.data.dados);
            return false;
        }
    },
    async setApontamento(token, date, chegada, almoco, saida) {
        const params = new URLSearchParams();
        params.append('data', date);
        params.append('chegada', chegada);
        params.append('almoco', almoco);
        params.append('saida', saida);
        params.append('token', token);
        const data = await this.axios.post('/apontamentos/setApontamento', params)
        const status = data.data.status;
        if (status == 'sucesso') {
            alert('Apontamento Realizado com sucesso!');
            return data.data.dados[0];

        } else {
            alert(data.data.dados);
            return false;
        }
    },

    async getHistorico(token) {
        const params = new URLSearchParams();
        params.append('token', token);
        // params.append('data', date);
        const data = await this.axios.post('/apontamentos/historicoApontamento', params)
        const status = data.data.status;
        if (status == 'sucesso') {
            return data.data.dados;
        } else {
            alert(data.data.dados);
            return false;
        }
    }
}