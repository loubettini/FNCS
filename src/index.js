import React from 'react';
import ReactDom from 'react-dom';
import {UserPanel} from "./UserPanel";


function App() {
    const name = 'lou';
 const welcoming = <p> Bonjour {name}</p>;

    return(

        <>
            {welcoming}
            {welcoming}
         </>
    )
}
ReactDom.render(<UserPanel/>,document.getElementById('root'));


