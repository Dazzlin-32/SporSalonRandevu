import styles from '../UserHomePage/UserHomepage.module.css';
import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useLocation} from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import {data} from '../../userapi';

const AdminHomePage = () => {
  const [popUp, setPopUp] = useState(false);
  const location = useLocation();
  const [sportList, setSportList] = useState(data[location.state.id].events)

  useEffect(
    ()=>{
      setSportList(data[location.state.id].events)
    }

  ,[]);

  const individualButton = ()=>{
    let sports = data[location.state.id].events
    setSportList(sports.filter(sportList => sportList.type === 'individual'))
    console.log(sportList)
  }

  const groupButton = ()=>{
    let sports = data[location.state.id].events
    setSportList(sports.filter(sports => sports.type === 'group'))
    console.log(sportList)
  }
  const Modal = (e) => {
    setPopUp(true); 
  };
  
    return ( 
        <div className={styles.Container}>
           <NavBar value={location.state.id}/>
                <div className={styles.body}>
                  {console.log(data[location.state.id].events)}
                  
            
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
                
            </div>
                 <Popup 
                      trigger={popUp}
                      modal
                      position="right center"
                      closeOnDocumentClick>
                      <span> clicked! </span>
                </Popup>                      
        </div>
     );
}
 
export default AdminHomePage;