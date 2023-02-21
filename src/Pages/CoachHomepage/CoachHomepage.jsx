import styles from '../UserHomePage/UserHomepage.module.css'
import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useLocation} from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import Popup from 'reactjs-popup';
import {data} from '../../userapi';
import { appointment } from '../../appointment';

const CoachHomePage = () => {
  const [clickedSport, setClickedSport] = useState({})
  const [events, setEvents] =  useState('');
  const [sportList, setSportList] = useState('');
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const location = useLocation();
  const [sportType,setSportType] = useState('') 
  const [trainees,setTrainees] = useState([]) 
  const [limit,setLimit] = useState(0) 
 

  useEffect(
    ()=>{
      console.log(data[location.state.id].events)
      setSportList(data[location.state.id].events)
      console.log(sportList)
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
    setEvents(e.event )
    setOpen(o => !o)
    popupInfo(e)
  };
  const popupInfo = (e)=> {
    console.log(e.event.extendedProps)
    setSportType(e.event.extendedProps.type.toUpperCase())
    setTrainees(e.event.extendedProps.trainees)
    setLimit(e.event.extendedProps.limit)
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
                        <h2>{events.title}</h2>{
                          
                        }
                        <h3> Type: {sportType}</h3>
                        <h3>Number of Trainees : {trainees.length}</h3>
                        <h3>Limit : {limit}</h3>
                        <br />
                        <br />
                        <button onClick={closeModal}>Cancel</button>
                      </div>
                    </Popup>
            
            </div>
        </div>
     );
}
 
export default CoachHomePage;