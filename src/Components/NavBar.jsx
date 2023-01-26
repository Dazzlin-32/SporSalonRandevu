import React, { Component } from 'react';
import styles from '../Pages/UserHomePage/UserHomepage.module.css'
import DropDown from './DropDown';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
             <div className={styles.nav}>
                <div className="label">
                    <label>XYZ Sport and Fitness</label>
                </div>
                <div className={styles.navbar}>
                    <ul>
                        <li><a href="/userhome">Home</a></li>
                        <li><a href="#DropDown">Notification</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/login">Logout</a></li>
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