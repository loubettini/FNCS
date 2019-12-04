import React from 'react';
import PropTypes from 'prop-types';
const md5 = require('md5');

export class UserPanel extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={"https://www.gravatar.com/avatar/" + md5(this.props.email)}alt="Avatar" ></img>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{this.props.prenom}<i
                            className="material-icons right">{this.props.name}</i></span>
                    </div>
                </div>

            </>
        )

    }
}



UserPanel.propTypes={
    name:PropTypes.string.isRequired,
    prenom:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired
}
UserPanel.defaultProps={
    name:'Bettini',
    prenom:'Lou',
    email:'vasilvestre@laposte.net',
}
