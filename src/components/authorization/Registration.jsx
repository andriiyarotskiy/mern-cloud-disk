import React, {useState} from 'react';
import './authorization.scss'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [value, setValue] = useState({email: '', password: ''})

    const onChangeHandler = (e) => {
        setValue({...value, [e.currentTarget.name]: e.currentTarget.value})
    }
    return (
        <div className="authorization">
            <div className="authorization__header">
                Registration
            </div>
            <Input value={value}
                   onChange={onChangeHandler}
                   name={"email"}
                   type={"text"} placeholder={"Enter your email... "}/>
            <Input value={value}
                   onChange={onChangeHandler}
                   name={"password"}
                   type={"password"} placeholder={"Enter your password..."}/>
            <button
                onClick={() => registration(value.email, value.password)}
                className="authorization__btn">Sign UP</button>
        </div>
    );
};

export default Registration;