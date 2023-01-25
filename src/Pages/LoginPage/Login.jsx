import './Login.css'
import { useFormik } from 'formik';
import SignUpSchema from '../validationSchema';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const userdata = {
        email : "user@gmail.com",
        password: "123443",
    }
    const {handleChange, handleSubmit, values ,errors, touched} = useFormik({
        initialValues: {
            email: "",
            password:"",
        },
        onSubmit : values=>{
             if (values.email=== userdata.email && values.password === userdata.password ){
               navigate('/userhome')
             }
             else
                alert("User email or password not correct")
            
        },
        // validationSchema: {SignUpSchema},
    })
    return ( 
        <div className="container">
            <div className="firstDiv">
                <p>Nothing will workout unless you do!</p>
            </div>
            <div className="secondDiv">
                <div className="logo">
                    XYZ Sport Salon 
                </div>
                <br />
                <div className="loginText">
                    <h3>Login</h3>
                    <p>Login to your account</p>
                    
                </div>
                <form 
                    onSubmit={handleSubmit}
                    className="form">
                    <input type="email"
                         name="email" 
                         id="email"
                         placeholder='E-mail'
                         onChange={handleChange}
                         value = {values.email}
                          />
                          {errors.email && touched.email &&<label>{errors.email}</label>}
                    <input type="password"
                         name="password" 
                         id="password"
                         placeholder='Password'
                         onChange={handleChange}
                         value = {values.password} />
                    <a href=''>Forgot Password?</a>
                    <br />
                    <button
                    >Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;