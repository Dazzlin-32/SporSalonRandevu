import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Pages/Profile/Profile';
import styles from '../Pages/UserHomePage/UserHomepage.module.css'
import DropDown from './DropDown';

class NavBar extends Component {
    render() { 
        return (
             <div className={styles.nav}>
                <div className="label">
                    <label>XYZ Sport and Fitness</label>
                </div>
                <div className={styles.navbar}>
                    <ul>
                        <li><Link to="/profile">Home</Link></li>
                        <li><Link to="#DropDown">Notification</Link></li>
                        <li><Link to="/profile" state={{id: this.props.value}}>Profile</Link></li>
                        <li><Link to="/login">Logout</Link></li>
                    </ul>
                </div>
            {/* <div id='Dropdown'>
                <DropDown />
            </div> */}
            </div>
        );
    }
}
 
export default NavBar;