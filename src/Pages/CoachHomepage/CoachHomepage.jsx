import styles from '../UserHomePage/UserHomepage.module.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useLocation} from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import {data} from '../../userapi';

const CoachHomePage = () => {
  const location = useLocation();
    return ( 
        <div className={styles.Container}>
           <NavBar/>
                <div className={styles.body}>
                  {console.log(data[location.state.id].events)}
                  
            
                <FullCalendar                
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    customButtons={{
                            new: {
                                text: 'new',
                                click: () => console.log('new event'),
                            },
                            }}
                    events={data[location.state.id].events}
                    eventColor = "#79A398"
                    eventClick={(e) =>alert(e.event.title + " Clicked")}
                    expandRows = 'true'
                    height= "100%"
                    slotMinTime="08:00:00"
                    slotMaxTime = "22:00:00"
                    
                    
                                />
            
            </div>
        </div>
     );
}
 
export default CoachHomePage;