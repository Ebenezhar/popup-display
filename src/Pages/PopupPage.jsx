import React, { useState } from 'react'
import Popup from '../component/Popup'
import './popupPage.css'

function PopupPage() {
    const [isOpen, setIsOpen] = useState(false)
    let handleClose = () => {
        console.log("dsfas");
    }
    let togglepopup = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='popup-page'>
            <button className='btn btn-primary' onClick={togglepopup}>Get Started</button>
            {
                isOpen && <Popup handleClose={togglepopup} content={
                    <div>
                        <h5 className='heading'>Modal title</h5>
                        <form className='context-box'>
                            <div className='content'>
                                <label for="age">Name</label>
                                <input className="form-control" type={"text"} id='age' />
                            </div>
                            <div className='content'>
                                <label for="gender"> Type</label>
                                <select className="form-control" name="type">
                                    <option value="none" selected></option>
                                    <option value="type1">Type1</option>
                                    <option value="type2">Type2</option>
                                    <option value="type3">Type3</option>
                                </select>
                            </div>
                            <div className='content'>
                                <label for="gender"> Value Type</label>
                                <select className="form-control" name="valueType">
                                    <option value="none" selected></option>
                                    <option value="valueType1">valueType1</option>
                                    <option value="valueType2">valueType2</option>
                                    <option value="valueType3">valueType3</option>
                                </select>
                            </div>
                            <div className='submit-buttons'>
                                <button className='btn btn-light m-2 border border-primary'>close</button>
                                <button className='btn btn-primary m-2'>Save Changes</button>
                            </div>
                        </form>
                    </div>
                } />
            }

        </div>

    )
}

export default PopupPage