import './HomePagestyle.css'
import {useNavigate} from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    return (  
        <div className="App">
            <div className="App-body">
                <div className="Container">
                    <div className="Container-header ">
                        <button type='button'
                                onClick={()=> {}}> Contact Us</button>
                        <button type='button'
                                onClick={()=> {navigate('/login')}}>Log In</button>
                    </div>
                    <div className="Container-body">
                        <h2>REACH YOUR LIMITS <br/> AND GET TO THE <br/> NEXT LEVEL</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                           <br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>
                             exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  
                        
                        <button type='button'
                                onClick={()=>{navigate('/login')}}> JOIN NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomePage;