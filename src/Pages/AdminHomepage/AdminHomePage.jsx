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
import {data} from '../../userapi';


const AdminHomePage = () => {
// const [clickedSport, setClickedSport] = useState('') // For listing details in the modal
  const [events, setEvents] =  useState(''); // For listing events in calender
  const [sportList, setSportList] = useState(''); // Fro event listing in individiual group and all buttons
  const [open, setOpen] = useState(false);// For Modal opening
  const closeModal = () => setOpen(false); // For <odal Closing
  const location = useLocation(); // For accesing the params
  const [sportType,setSportType] = useState('') //For modal details
  const [trainees,setTrainees] = useState([])  //For modal details
  const [limit,setLimit] = useState(0)  //For modal details
  const [coach, setCoach] = useState('') // For modal
 
  useEffect(
    ()=>{
      setSportList(data[location.state.id].events)
    }

  ,[]);

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
    setEvents(e.event)
    popupInfo(e)
  };
  const popupInfo = (e)=> {
    console.log(e.event.extendedProps)
    setSportType(e.event.extendedProps.type.toUpperCase())
    setTrainees(e.event.extendedProps.trainees)
    setLimit(e.event.extendedProps.limit)
    setCoach(e.event.extendedProps.coach)
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
                    editable= "true"
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
                        <h2>{events.title}</h2>
                        <h3>Coach : {coach}</h3>
                        <h3> Type: {sportType}</h3>
                        <h3>Number of Trainees : {trainees.length}</h3>
                        <h3>Limit : {limit}</h3>
                        <br />
                        <br />
                        <button onClick={closeModal}>Cancel</button>
                      </div>
                    </Popup>

                    <CustomPopup />


                  
                
            </div>
                      
        </div>
     );
}
 
export default AdminHomePage;