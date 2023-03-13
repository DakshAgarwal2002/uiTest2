import React from 'react'
import './HeroSection.css'
// import { EventList } from '../eventList'
import { useSelector } from 'react-redux'
import {eventList1 ,eventList2,eventList10,eventList11,eventList12,eventList13,eventList14,eventList15,eventList16,eventList17,eventList18,eventList19,eventList20,eventList3,eventList4,eventList5,eventList6,eventList7,eventList8,eventList9 } from '../eventList/eventList'
const HeroSection = () => {
  const amount=useSelector(state=>state.amount)
  let eventList=eventList1;
  if(amount=='Events Type 1')
  {
    eventList=eventList1;
  }
  if(amount=='Events Type 2')
  {
    eventList=eventList2;
  }
  if(amount=='Events Type 3')
  {
    eventList=eventList3;
  }
  if(amount=='Events Type 4')
  {
    eventList=eventList4;
  }
  if(amount=='Events Type 5')
  {
    eventList=eventList5;
  }
  if(amount=='Events Type 6')
  {
    eventList=eventList6;
  }
  if(amount=='Events Type 7')
  {
    eventList=eventList7;
  }
  if(amount=='Events Type 8')
  {
    eventList=eventList8;
  }
  if(amount=='Events Type 9')
  {
    eventList=eventList9;
  }
  if(amount=='Events Type 10')
  {
    eventList=eventList10;
  }
  if(amount=='Events Type 11')
  {
    eventList=eventList11;
  }
  if(amount=='Events Type 12')
  {
    eventList=eventList12;
  }
  if(amount=='Events Type 13')
  {
    eventList=eventList13;
  }
  if(amount=='Events Type 14')
  {
    eventList=eventList14;
  }
  if(amount=='Events Type 15')
  {
    eventList=eventList15;
  }
  if(amount=='Events Type 16')
  {
    eventList=eventList16;
  }
  if(amount=='Events Type 17')
  {
    eventList=eventList17;
  }
  if(amount=='Events Type 18')
  {
    eventList=eventList18;
  }
  if(amount=='Events Type 19')
  {
    eventList=eventList19;
  }
  if(amount=='Events Type 20')
  {
    eventList=eventList20;
  }
  return (
    <div className='section-wrapper'>
        <div className='event-table'>
            <table>
            {eventList.map((user) => (
                <>
                <tr>
                <div className="user"><div>timestamp</div>{user.timestamp}</div>
                <div className="user"><div>_raw</div>{user.name}</div>
                </tr>
                </>
                
            ))}
            </table>
        </div>
    </div>
  )
}

export default HeroSection