import React from 'react'
import '../Popup.css'

function Popup(props) {
    return (props.trigger)?(
        <div className="popup">

            <div className="popup-inner">

                <input type="button" value="Close" className="close-btn" onClick={() => props.closeWindow(false)}/>

                {props.children}

            </div>
            
        </div>
    ): ""
}

export default Popup
