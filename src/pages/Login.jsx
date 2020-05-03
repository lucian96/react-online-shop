import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import {loginUser} from '../redux/actions/user';


class Login extends React.Component {


    componentDidUpdate(prevProps){
        if (this.props.userData !== prevProps.userData){
            this.props.history.push('/')
        }
    }

    render() {

        const { loginUser } = this.props;
        return(
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <div className="d-flex justify-content-center">
                        <button 
                            className="btn btn-outline-dark" 
                            onClick={() => loginUser()}>Sign In with Google
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
        loginUser: () => dispatch(loginUser())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);