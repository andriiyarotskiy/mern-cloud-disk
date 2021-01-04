import React from 'react';
import './navbar.scss'
import Logo from '../../assets/img/navbar-logo.svg'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    const onClickHandler = ()=> {
        dispatch(logOut())
        localStorage.removeItem('token')
    }
    return (
        <div className="navbar">
            <div className="container">

                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">
                    <Link to="/">MERN CLOUD </Link>
                </div>


                {!isAuth && <div className="navbar__login">
                    <Link to="/login">
                        Sign IN
                    </Link>
                </div>}
                {!isAuth && <div className="navbar__registration">
                    <Link to="/registration">
                        Sign UP
                    </Link>
                </div>}
                {isAuth && <div className="navbar__login"
                                onClick={onClickHandler}>
                    Log Out
                </div>}
            </div>
        </div>
    );
};

export default Navbar;