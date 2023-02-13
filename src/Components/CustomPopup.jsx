import { useState } from 'react';
import Popup from 'reactjs-popup';

const CustomPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return ( 
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <h2>Do you want to take appointment of ......?</h2>
          <h4>Clicked!</h4>
          <br />
          <br />

          <button onClick={()=>{}}>Confirm Appointment</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </Popup>
     );
}
 
export default CustomPopup;