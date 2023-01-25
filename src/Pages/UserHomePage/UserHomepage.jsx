import styles from './UserHomepage.module.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calender.css'
import { useState } from 'react';


const UserHomepage = () => {
    const events = [
  {
    id: 1,
    title: 'Pilates',
    start: '2023-01-23T08:00:00',
    end: '2021-01-23T09:00:00',
  },
  {
    id: 2,
    title: 'KickBox',
    start: '2023-01-25T08:00:00',
    end: '2023-01-25T109:00:00',
  },
  { 
    id: 3, 
    title: 'Zumba', 
    start: '2023-01-28T10:00:00',
    end: '2023-01-28T11:00:00',
 },
    { 
    id: 4, 
    title: 'Fitness', 
    start: '2023-01-24T12:00:00',
    end: '2023-01-24T13:00:00', 
},
    { 
    id: 5, 
    title: 'Body Building', 
    start: '2023-01-26T14:00:00',
    end: '2023-01-26T15:00:00', 
},
];
    return ( 
        <div className={styles.Container}>
            <div className={styles.nav}>
                <div className="label">
                    <label>XYZ Sport and Fitness</label>
                </div>
                <div className={styles.navbar}>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Notification</a></li>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Logout</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.body}>
                <FullCalendar
                
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    customButtons={{
                            new: {
                                text: 'new',
                                click: () => console.log('new event'),
                            },
                            }}
                    headerToolbar={{
                            center: 'timeGridWeek',
                            }}
                    events={events}
                    eventColor = "#79A398"
                    eventClick={(e) =>alert(e.event.title + " Clicked")}
                    height = '70%'
                    slotMinTime="08:00:00"
                    slotMaxTime = "22:00:00"
                    
                    
                                />
            </div>
        </div>
     );
}
 
export default UserHomepage;