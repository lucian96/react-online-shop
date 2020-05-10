import React from 'react';
import Layout from '../components/Layout/Layout';
import {connect} from 'react-redux';
import {loginUserGoogle, loginUserFacebook} from '../redux/user/userActions';


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
                    <div className="d-flex justify-content-center">
                        <button 
                            className="btn btn-outline-dark" 
                            onClick={() => loginUserGoogle()}>Sign In with Google
                        </button>
                        <button 
                            className="btn btn-outline-dark" 
                            onClick={() => loginUserFacebook()}>Sign In with Facebook
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