import React, { Component  } from "react";
import { BrowserRouter as Link  } from 'react-router-dom';

class Menu extends Component {    
    render() {
        return  (
            <div>
                <ul className={this.props.css} id={this.props.id}>
                    <li><Link to={'/'} >Home</Link></li>
                    <li><Link to={'/address'} >Endereços</Link></li>                            
                </ul>
            </div>
        );
    }
}

export default Menu;