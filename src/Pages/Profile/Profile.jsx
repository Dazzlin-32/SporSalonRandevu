import { useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { data } from "../../userapi";
import styles from "./Profile.module.css";



const Profile = () => {
    const location = useLocation();
    return ( 
        <div>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.profile}>
                        <span className={styles.circle}>Picture</span>
                        <p>Full Name: {data[location.state.id].name } { data[location.state.id].surname} </p>
                        <p>E-mail: {data[location.state.id].email } </p>
                        <p>Password: *****</p>
                        <p>User Type: {data[location.state.id].type } </p>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Profile;