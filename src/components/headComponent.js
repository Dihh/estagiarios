import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => (
    <React.Fragment>
        <div className="nav-button">

        </div>
        <div className="nav-user">
            <div className="user-img">
                <div className="img"></div>
            </div>
            <div className="user-name">
                {props.nome}
            </div>
            <div className="user-logOut">
                <Link to="./"><i className="fa fa-sign-out"></i></Link>
            </div>
        </div>
    </React.Fragment>
)