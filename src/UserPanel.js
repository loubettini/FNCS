import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'isemail';

const md5 = require('md5');
export class UserPanel extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return React.createElement(React.Fragment,null,
                React.createElement('h1',{},this.props.name),
                React.createElement('h1',{},this.props.prenom),
                React.createElement('img', { src: "https://www.gravatar.com/avatar/" + md5(this.props.email)}))
    }
}

const requiredEmailPropType = (props, propName, componentName) => {
    const value = props[propName];

    if (value == null || typeof value !== 'string' || !isEmail.validate(value)) {
        return new TypeError(`Invalid Email Prop Value: ${value} for ${propName} in ${componentName}`);
    }

    return null;
};

const emailPropType = (props, propName, componentName) => {
    if (props[propName] == null) {
        return null;
    }

    return requiredEmailPropType(props, propName, componentName);
};

emailPropType.isRequired = requiredEmailPropType;


UserPanel.propTypes={
    name:PropTypes.string.isRequired,
    prenom:PropTypes.string.isRequired,
    email:emailPropType.isRequired
}
UserPanel.defaultProps={
    name:'Bettini',
    prenom:'Lou',
    email:'vasilvestre@laposte.net',
}
