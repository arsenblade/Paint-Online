import React from 'react'
import toolState from '../store/toolState'
import '../styles/setting-bar.scss'

const SettingBar = () => {
  return (
    <div className='setting-bar'>
    <label style={{marginLeft: '10px'}} htmlFor='line-width'>Толщина линии</label>
    <input 
      onClick={e => toolState.setLineWidth(e.target.value)}
      style={{marginLeft: '10px', marginRight: '10px'}} 
      id='line-width' type='number' 
      defaultValue={1} 
      min={1} max={50} />
    <label style={{marginLeft: '10px'}} htmlFor='color-stroke'>Цвет обводки</label>
    <input 
      id='color-stroke' 
      onChange={e => toolState.setStrokeColor(e.target.value)}  
      type='color'
      style={{marginLeft: '10px', marginRight: '10px'}} 
    />
    </div>
  )
}

export default SettingBar