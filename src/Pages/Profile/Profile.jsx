import { useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { data } from "../../userapi";
import styles from "./Profile.module.css";
import {CiLocationOn, CiCalendarDate, CiMail,CiPhone, CiUnread, CiSquareChevDown} from "react-icons/ci";



const Profile = () => {
    const location = useLocation();
    return ( 
        <div>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.profile}>
                        <span className={styles.circle}><img src={data[location.state.id].img} alt="" /></span>
                        <h3> <span>{data[location.state.id].name } { data[location.state.id].surname}</span> </h3>
                        <p><CiMail/>   {data[location.state.id].email } </p>
                        <p><CiCalendarDate/>   {data[location.state.id].birthdate}</p>
                        <p><CiLocationOn/>   {data[location.state.id].addres } </p>
                        <p><CiPhone/>   {data[location.state.id].telephone}</p>
                        <p>Password:   <CiUnread/> </p>
                        <p>{(data[location.state.id].type=='user')? "TRAINEE":data[location.state.id].type.toUpperCase()}</p>
                        <p>  Your Motto   <CiSquareChevDown/></p>
                        <label className={styles.moto}>{data[location.state.id].motto } </label>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Profile;