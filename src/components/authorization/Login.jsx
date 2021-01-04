import React, {useState} from 'react';
import './authorization.scss'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {
    const [value, setValue] = useState({
        email: '', password: ''})

    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        setValue({
            ...value,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    return (
        <div className="authorization">
            <div className="authorization__header">
                Login
            </div>
            <Input value={value}
                   onChange={onChangeHandler}
                   name={"email"}
                   type={"text"}
                   placeholder={"Enter your email... "}/>
            <Input value={value}
                   onChange={onChangeHandler}
                   name={"password"}
                   type={"password"}
                   placeholder={"Enter your password..."}/>
            <button
                onClick={()=> dispatch(login(value.email, value.password))}
                className="authorization__btn">Sign IN
            </button>
        </div>
    );
};

export default Login;