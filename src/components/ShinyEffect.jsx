import React from 'react'

export const ShinyEffect = ({left,right,top,size=500}) => {
    const positionStyles = {
        top:`${top}px`,
        width:`${size}px`,
        height:`${size}px`,
        zIndex: -1,  
    } 
    if(left !== undefined){
        positionStyles.left = `${left}px`
    }
    if(right !== undefined){
        positionStyles.right = `${right}px`
    } 
  return (
    <div  
    
    className='shiny text-white absolute rounded-[50%] pointer-events-none z-[1]' style={positionStyles}
    ></div>
  )
}
