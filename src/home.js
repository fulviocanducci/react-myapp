import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

import 'material-icons/iconfont/material-icons.css';
import 'material-icons/css/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

class Home extends Component {
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
                text:'Home'   
            }, {
                path: '/address',
                text: 'Endereços'
            }]
        }      
    }

    init() {
        document.addEventListener('DOMContentLoaded', function () {    
            var c = this.state.materialize;
            c.elems = document.querySelectorAll('.sidenav');
            this.setState({c});
            this.state.materialize.instances = window.M.Sidenav.init(
                this.state.materialize.elems,
                this.state.materialize.options
            );
            console.log(this.state.materialize);
        }.bind(this));
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {

    }
    render() {       
        const itemMenu = this.state.menu.map((item, key) => {
            return (<li><Link to={item.path}>{item.text}</Link></li>);
        }) 
        return (
            <Router history="">
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                        <a href="" className="brand-logo">Logo</a>
                        <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>                        
                        <ul className="right hide-on-med-and-down" id="d">
                            {itemMenu}
                        </ul>
                        </div>
                    </nav>                    
                    <ul className="sidenav" id="mobile-demo">
                        {itemMenu}                            
                    </ul>
                </div>                
            </Router>
        );
    }
}


export default Home;
