import React from 'react';
import './input.scss'

const Input = (props) => {
    return (
       <input type={props.type}
              value={props.value.name}
              onChange={props.onChange}
              name={props.name}
              placeholder={props.placeholder}/>
    );
};

export default Input;