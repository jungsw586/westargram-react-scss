import React, {Component} from 'react';
import '../Styles/Login.scss';
//import '../Styles/Reset.scss';
import MainLogin from '../Component_login/MainLogin';
import SecLogin from '../Component_login/SecLogin';
import AppDwn from '../Component_login/AppDwn';
import StoreLink from '../Component_login/StoreLink';
import AppStoreIcon from '../Component_login/img/appstore.png';
import GooglePlayStoreIcon from '../Component_login/img/google-play-badge.png';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      storeLink: {
        apple:'https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo',
        google:'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXTB3AGAEAAGC2TID4DGQRYLCTCRP%26utm_content%3Dlo%26utm_medium%3Dbadge',
      },
    }
  }
  render() {

    return(
      <div className="loginBody">
        <MainLogin />
        <SecLogin />
        <AppDwn />
        <div>
          <StoreLink
            className="appStore Link"
            href={this.state.storeLink.apple}
            imgClassName={"appStoreLogo"}
            imgSrc={AppStoreIcon}
          />
          <StoreLink
            className="googlePlay Link"
            href={this.state.storeLink.google}
            imgClassName={"googlePlayLogo"}
            imgSrc={GooglePlayStoreIcon}
          />
        </div>
      </div>
    );
  }
}
export default Login;
