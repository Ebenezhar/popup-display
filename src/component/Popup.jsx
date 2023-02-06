import React from 'react'
import './popup.css'

function Popup(props) {
    return (
        <div className='popupBox'>
            <div className='box'>
                <button className='closeButton' onClick={props.handleClose}>X</button>
                {props.content}
            </div>
        </div>
    )
}

export default Popup