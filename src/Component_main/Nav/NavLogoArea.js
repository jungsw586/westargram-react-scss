import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import InstagramLogo from '../../Component_main/Main/Image_Logo/instagram-logo.png'
import InstagramLogoText from '../../Component_main/Main/Image_Logo/logo_text.png'

class NavLogoArea extends Component {
    handlerLogout=()=>{
        localStorage.removeItem('user');
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="nav-logo-area">
                <button onClick={this.handlerLogout}>
                    <img className="nav-instagram-logo" alt="logo" src={InstagramLogo} />
                </button>
                <span className="nav-bar1"></span>
                <img className="nav-text-logo" alt="logo" src={InstagramLogoText} />
            </div>
        );
    }
}

export default withRouter(NavLogoArea)