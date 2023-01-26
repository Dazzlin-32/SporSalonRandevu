import NavBar from "../../Components/NavBar";
import styles from "./Profile.module.css"

const Profile = () => {
    
    return ( 
        <div>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.profile}>
                        <span className={styles.circle}>Picture</span>
                        <p>Full Name:  </p>
                        <p>E-mail: </p>
                        <p>Password:</p>
                        <p>Telephone: </p>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Profile;