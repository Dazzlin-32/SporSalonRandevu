import styles from '../UserHomePage/UserHomepage.module.css';
import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useLocation} from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import CustomPopup from '../../Components/CustomPopup';
import {data, bookUser} from '../../userapi';

const UserHomepage = () => {
  const [events, setEvents] =  useState('');
  const [sportList, setSportList] = useState('');
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const location = useLocation();

  useEffect(
    ()=>{
      setSportList(data[location.state.id].events)
    }

  ,[data[location.state.id]]);

  const individualButton = ()=>{
    let sports = data[location.state.id].events
    setSportList(sports.filter(sportList => sportList.type === 'individual'))
    
  }

  const groupButton = ()=>{
    let sports = data[location.state.id].events
    setSportList(sports.filter(sports => sports.type === 'group'))
    
  }
  const Modal = (e) => {
    setOpen(o => !o)
    setEvents(e.event )
  };
  const makeAppointment = (id) =>{
    let userId = location.state.id
   // console.log(appointment.find(appointment => appointment.groupId === id).trainee.find(data[location.state.id].name))
   bookUser(events.groupId,userId)
  closeModal();
  
}

  
    return ( 
        <div className={styles.Container}>
           <NavBar value={location.state.id}/>
                <div className={styles.body}>
                  
            
                <FullCalendar                
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    customButtons={{
                      individual: {
                          text: 'Individual Sports',
                          click: () =>{individualButton()},
                      },
                      group : {
                        text: 'Group Sports',
                      click: () => {groupButton()},
                      },
                      all: {
                        text: 'All Sports',
                        click: ()=>{setSportList(data[location.state.id].events)}
                      }
                            }}
                    headerToolbar = {
                      {
                        center: 'individual group all'
                      }
                    }
                    events={sportList}
                    eventColor = "#79A398"
                    eventClick={(e) =>{Modal(e)}}
                    expandRows = 'true'
                    height= "100%"
                    slotMinTime="08:00:00"
                    slotMaxTime = "22:00:00"
                    
                    
                                />
                    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                      <div className="modal">
                        <a className="close" onClick={closeModal}>
                          &times;
                        </a>
                        <h2>Do you want to take appointment of {events.title}?</h2>
                        <br />
                        <br />

                        <button onClick={()=>{makeAppointment(events.groupId)}}>Confirm Appointment</button>
                        <button onClick={closeModal}>Cancel</button>
                      </div>
                    </Popup>

                    <CustomPopup />


                  
                
            </div>
                      
        </div>
     );
}
 
export default UserHomepage;