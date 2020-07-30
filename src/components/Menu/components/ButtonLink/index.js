import React from 'react';

function ButtonLink(props){
    //props -> objeto ->  {className: "o que alguém passar", href="/"}
    return (
        <a className={props.ClassName} href={props.href}>
            {props.children}
        </a>   
    );
}

export default ButtonLink;