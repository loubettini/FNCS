import React from 'react';
export class AppClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return React.createElement('p',{style:{color:'red'}},'paragraph  '+this.props.name);
    }

}