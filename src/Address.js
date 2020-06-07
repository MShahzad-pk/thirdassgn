import React from 'react';

function Address (props){
    return (
    <div>
        <h1>My Name is {props.name}.</h1>
        <h2>My repository address is {props.url}.</h2>
    </div>
    );
}
export default Address;