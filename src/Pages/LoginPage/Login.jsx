import './Login.css'
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {data} from '../../userapi'

const Login = () => {
    const navigate = useNavigate();
    
    let user;
    const {handleChange, handleSubmit, values ,errors, touched} = useFormik({
        initialValues: {
            email: "",
            password:"",
        },
        onSubmit : values=>{
            
            try{
                user = data.find(data => data.email === values.email)
                 if(user.password === values.password){
                      if(user.type === 'user')
                        navigate('/userhome',{state:{id:user.id}})
                    else if (user.type === 'coach')
                        navigate('/coachhome', {state:{id:user.id}})
                    else
                        navigate('/adminhome', {state:{id:user.id}})

                 }
                 else{
                   alert("Password Incorrect")
                 }
            }
            catch(e)
            {
                alert("Email incorrect " + e)
            }      
        },
        // validationSchema: {SignUpSchema},
    })
    return ( 
        <div className='bodyStyle'>
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
                        <button type='submit'
                        >Login</button>
                    </form>
                </div>
            </div>
        </div>

     );
}
 
export default Login;
