import React from 'react';
import './Hello.css'

function Hello({firstName}){
    return <p class = "myName">
        This tag is created from hello.js : {firstName}
          </p>
}

export default Hello;