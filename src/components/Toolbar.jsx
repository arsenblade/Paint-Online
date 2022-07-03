import React from 'react'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import '../styles/toolbar.scss'
import Brush from '../tools/Brush'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import Rect from '../tools/Rect'
import Eraser from '../tools/Eraser'
import Circle from '../tools/Circle'
import Line from '../tools/Line'


const Toolbar = observer( () => {
  const changeColor = e => {
    toolState.setStrokeColor(e.target.value)
    toolState.setFillColor(e.target.value)
  }

  return (
    <div className='toolbar'>
      <button className={cn('toolbar__btn', 'brush', {
        ['active']: toolState.tool instanceof Brush
      })}  onClick={() => toolState.setTool(new Brush(canvasState.canvas))} />
      <button className={cn('toolbar__btn', 'rect', {
        ['active']: toolState.tool instanceof Rect
      })}  onClick={() => toolState.setTool(new Rect(canvasState.canvas))} />
      <button className={cn('toolbar__btn', 'circle', {
        ['active']: toolState.tool instanceof Circle
      })}  onClick={() => toolState.setTool(new Circle(canvasState.canvas))} />
      <button className={cn('toolbar__btn', 'eraser', {
        ['active']: toolState.tool instanceof Eraser
      })}  onClick={() => toolState.setTool(new Eraser(canvasState.canvas))} />
      <button className={cn('toolbar__btn', 'line', {
        ['active']: toolState.tool instanceof Line
      })}  onClick={() => toolState.setTool(new Line(canvasState.canvas))} />
      <input onChange={e => changeColor(e)} type='color' className='color'/>
      <button className='toolbar__btn undo' onClick={() => canvasState.undo()}/>
      <button className='toolbar__btn redo' onClick={() => canvasState.redo()}/>
      <button className='toolbar__btn save' />
    </div>
  )
})

export default Toolbar