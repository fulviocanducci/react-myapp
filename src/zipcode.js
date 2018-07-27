import React, {Component} from 'react';

class Zipcode extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                        <input id="search" type="search" required pattern="\d*"/>
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">search</i>
                        </label>
                        <i className="material-icons">close</i>
                        </div>
                    </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Zipcode;