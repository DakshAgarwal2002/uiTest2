import React from 'react'
import './VerticalScrollBar.css'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
const VerticalScrollBar = () => {
  const dispatch=useDispatch()
  // const handleClick = event => {
    
  //   // setIsActive(current=>!current);
  //   console.log(event.currentTarget.classList.toggle('active-event'))
  // };
  return (
    <div className='VerticalScrollBar'>
        <ul>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 1"))}}>Events Type 1</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 2"))}}>Events Type 2</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 3"))}}>Events Type 3</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 4"))}}>Events Type 4</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 5"))}}>Events Type 5</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 6"))}}>Events Type 6</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 7"))}}>Events Type 7</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 8"))}}>Events Type 8</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 9"))}}>Events Type 9</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 10"))}}>Events Type 10</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 11"))}}>Events Type 11</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 12"))}}>Events Type 12</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 13"))}}>Events Type 13</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 14"))}}>Events Type 14</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 15"))}}>Events Type 15</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 16"))}}>Events Type 16</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 17"))}}>Events Type 17</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 18"))}}>Events Type 18</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 19"))}}>Events Type 19</li>
            <li onClick={()=>{dispatch(actionCreators.addEvent("Events Type 20"))}}>Events Type 20</li>
        </ul>
    </div>
  )
}

export default VerticalScrollBar