import React from 'react'
import "./individual.css"

const Individual = (item) => {
  return (
    <div className='backInd'>
    <div className='indivCard'>
        <img src={item.image} alt="" className='imgCard'/> 
        <h2>{item.title}</h2>
        <p className='textInd'>{item.text}</p>
        <div className='buttonArea'>
        <a href={item.webdirection} target='_blank'><button className='linkInd'>web</button></a>
        <a href={item.github} target='_blank'><button className='linkInd'>github</button></a>
        {
            item.github2
            &&
            (
                <a href={item.github2} target='_blank'><button className='linkInd'>github backend</button></a>
            )
        }
        <a href="indetx.html" target='_blank'><button className='linkInd'>return</button></a>
        </div>
    </div>
    </div>
  )
}
console.log()
export default Individual