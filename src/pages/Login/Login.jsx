import React from 'react';
import Layout from '../../components/Layout/Layout';
import {connect} from 'react-redux';
import logo from '../../assets/images/logo.png';
import './Login.css';
import {Link} from 'react-router-dom';
import {ReactComponent as Google} from '../../assets/icons/google.svg';
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';


import {loginUserGoogle, loginUserFacebook} from '../../redux/user/userActions';


class Login extends React.Component {


    componentDidUpdate(prevProps){
        if (this.props.userData !== prevProps.userData){
            this.props.history.push('/')
        }
    }

    render() {

        const { loginUserGoogle, loginUserFacebook } = this.props;
        return(
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <Link to='/'><img src={logo} alt="logo" /></Link>
                        <h2 className="text-center">Login</h2>
                        <p className="text-center">Alege providerul cu care vrei sa te loghezi</p>
                        
                            <button 
                                className="btn btn-outline-dark mb-2" 
                                onClick={() => loginUserGoogle()}>
                                <Google className="mr-3"/>
                                <span>Sign In with Google</span>
                            </button>
                            <button 
                                className="btn btn-outline-dark" 
                                onClick={() => loginUserFacebook()}>
                                    <Facebook className="mr-1"/>
                                    <span>Sign In with Facebook</span>
                            </button>
                    </div>
                </div>
            </Layout>
        )
    }
 
}

function mapStateToProps(state){
    return {
        userData: state.user.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        loginUserGoogle: () => dispatch(loginUserGoogle()),
        loginUserFacebook: () => dispatch(loginUserFacebook())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);