import React, { Component } from 'react';

class DropDown extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <button class={styles.dropbtn}>Dropdown</button>
                <div class={styles.dropdownContent}>
                <p className={styles.dropdownContenta} href="#">Link 1</p>
                <p href="#">Link 2</p>
                <p href="#">Link 3</p>
                </div>
            </div>
        );
    }
}
 
export default DropDown;

const styles = {
    dropbtn : {
  backgroundColor:  "#4CAF50",
  color: "white",
  padding: "16px",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
},

dropdown: {
  position: "relative",
  display: "inline-block",
},

dropdownContent :{
  display: "none",
  position: "absolute",
  backgroundColor: "#f9f9f9",
  minWidth: "160px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  zIndex: "1",
},
dropdownContenta : {
  color: "black",
  padding: "12px 16px",
  textDecoration: "none",
  display: "block",
}

// dropdownContent a:hover {background-color: #f1f1f1}

// .dropdown:hover .dropdown-content {
//   display: block;
// }

// .dropdown:hover .dropbtn {
//   background-color: #3e8e41;
//}
}