import './Section.scss'
import React from 'react'

function Section({Icon , title , color , selected}) {
  return (
    <div className={`section ${selected && 'section__selected'}`}
        style={{color:`${selected && color}` , borderBottom:`3px solid ${color}`}}
        >
        <Icon/>
        <h4>{title}</h4>

    </div>
  )
}

export default Section