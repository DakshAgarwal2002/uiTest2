import React from 'react'
import './Header.css'
import { useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Header = () => {
    const dispatch=useDispatch()
    const fruits=["Event Type 1"]
    const amount=useSelector(state=>state.amount)
    fruits.push(amount)
    const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    dispatch(actionCreators.addEvent(event.currentTarget.innerText))
    // setIsActive(current=>!current);
    console.log(event.currentTarget.classList.toggle('active-event'))
  };

  return (
    <div className='eventViewer'>
        <div className='eventViewer-first'>
            Events Viewer
        </div>
        <div className='eventViewer-second'>
        {fruits.map((user1) => (
                <div className={`open-events  ${isActive && 'active-event'}`} onClick={handleClick}>
                {user1}
                {console.log(fruits)}
                </div>
             ))}
            {/* <div className={`open-events  ${isActive && 'active-event'}`} onClick={handleClick}>
                Events type 1
            </div>
            <div className={`open-events  ${isActive && 'active-event'}`} onClick={handleClick}>
                Events type 2
            </div>
            <div className={`open-events  ${isActive && 'active-event'}`} onClick={handleClick}>
                Events type 3
            </div>
            <div className={`open-events ${isActive && 'active-event'}`} onClick={handleClick}>
                Events type 4
            </div> */}
        </div>
    </div>
  )
}

export default Header