import React, {Component} from 'react';
import Nav from '../Component_main/Nav/Nav'
import MainArea from '../Component_main/Main/MainArea'
import '../Styles/Main.scss';
//import '../Component_main/Nav/Nav.scss';
import '../Component_main/Nav/NavInputFilter/NavInputFilter.scss';
//import '../Styles/Reset.scss';

class Main extends Component {
    render() {
        return (
            <div id="MainArea">
                <Nav />
                <MainArea />
            </div>
        );
    }
}

export default Main