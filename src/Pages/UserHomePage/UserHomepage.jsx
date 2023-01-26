import styles from './UserHomepage.module.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calender.css'
import { useState } from 'react';
import NavBar from '../../Components/NavBar';



const UserHomepage = () => {
  const events = [
  {
    groupId: "pilates",
    title: "Pilates",
    description: "Group",
    startTime: "08:00:00",
    endTime: "09:00:00",
    daysOfWeek: [1],
    startRecur: "2023-01-01",
    endRecur: "2023-03-01",
  },
  {
    groupId: "kickBok",
    title: "KickBox",
    startTime: "08:00:00",
    endTime: "09:00:00",
    daysOfWeek: [3],
    startRecur: "2023-01-01",
    endRecur: "2023-03-01",
  },
  {
    groupId: "zumba",
    title: "Zumba",
    startTime: "10:00:00",
    endTime: "11:00:00",
    daysOfWeek: [6],
    startRecur: "2023-01-01",
    endRecur: "2023-03-01",
  },
  {
    groupId: "fitness",
    title: "Fitness",
    startTime: "12:00:00",
    endTime: "13:00:00",
    daysOfWeek: [2],
    startRecur: "2023-01-01",
    endRecur: "2023-03-01",
  },
  {
    groupId: "bodyBuilding",
    title: "Body Building",
    startTime: "14:00:00",
    endTime: "15:00:00",
    daysOfWeek: [4],
    startRecur: "2023-01-01",
    endRecur: "2023-03-01",
  },
];
    return ( 
        <div className={styles.Container}>
           <NavBar/>
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
                    events={events}
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
 
export default UserHomepage;