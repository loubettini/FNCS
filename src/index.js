import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {UserPanel} from "./UserPanel";

export default function App(props) {

    return React.createElement('p',{style:{color:'blue'}},'Paragraph '+ props.name);
}
App.propTypes={
    name:PropTypes.string.isRequired
}
App.defaultProps={
    name:'Lou',
}
ReactDom.render(React.createElement(UserPanel,{},null),document.getElementById('root'));

