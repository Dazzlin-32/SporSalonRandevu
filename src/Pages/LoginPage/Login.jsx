import './Login.css'
import { useFormik } from 'formik';
import SignUpSchema from '../validationSchema';

const Login = () => {
    const {handleChange, handleSubmit, values ,errors, touched} = useFormik({
        initialValues: {
            email: "",
            password:"",
        },
        onSubmit : values=>{
            alert("The values are "+ values.email +" and " + values.password)
        },
        validationSchema: {SignUpSchema},
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
                    <button
                    >Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;