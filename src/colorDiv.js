import React from 'react'

const Colordiv = (props) => {
    return (
        <div onClick = {props.handleClick} className="color-div" style={{backgroundColor:props.bg}}>
            
        </div>
    )
}

export default Colordiv

