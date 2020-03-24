import React from 'react'

export const CheckBox = props => {
    return (
      <li>
       <input key={props.value} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}

export default CheckBox