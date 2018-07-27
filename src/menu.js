import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

import 'material-icons/iconfont/material-icons.css';
import 'material-icons/css/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

import Address from './address';
import Zipcode from './zipcode';
import Home from './home';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.init = this.init.bind(this);  
        this.state = {
            materialize: {
                options: {},
                elems: {},
                instances: null
            },
            menu: [{
                path:'/',
                text:'Home',
                component: Home
            }, {
                path: '/zipcode',
                text: 'CEP',
                component: Zipcode
            }, {
                path: '/address',
                text: 'Endereços',
                component: Address
            }]
        }      
    }

    init() {
        document.addEventListener('DOMContentLoaded', function () {    
            var materialize = this.state.materialize;
            materialize.elems = document.querySelectorAll('.sidenav');
            materialize.instances = window.M.Sidenav.init(
                this.state.materialize.elems,
                this.state.materialize.options
            );
            this.setState({materialize});
            console.log(this.state);
        }.bind(this));
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {

    }
    render() {       
        const itemMenu = this.state.menu.map((item, key) => {
            return (<li key={key}><Link className="sidenav-close" to={item.path}>{item.text}</Link></li>);
        });
        const itemMenuSwitch = this.state.menu.map((item, key) => {
            return (<Route exact path={item.path} component={item.component} key={key} />);
        });
        console.log(itemMenuSwitch);
        return (
            <Router history="">
                <div className="nav-wrapper">
                    <nav>
                        <div className="nav-wrapper">
                        <a href="" className="brand-logo">Logo</a>
                        <a href="" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>                        
                        <ul className="right hide-on-med-and-down" id="d">
                            {itemMenu}
                        </ul>
                        </div>
                    </nav>                    
                    <ul className="sidenav" id="mobile-demo">
                        {itemMenu}                            
                    </ul>                              
                    <Switch>
                        {itemMenuSwitch}
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default Menu;
