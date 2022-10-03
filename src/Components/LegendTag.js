import React from 'react'
import "./LegendTag.css"

const LegendTag = (props) => {
  const classes = "border p-2 legend" + props.className
//   const textarea = "txtlegent" + props.className
  return (
    <div>
         <fieldset className={classes}>
                  <legend className="float-none w-auto p-2">
                    {props.title}
                  </legend>
                  <div className='col-12 sundry'>{props.sundry}</div>
                  {/* <textarea className={textarea}>{props.textarea}</textarea> */}
                </fieldset>
    </div>
  )
}

export default LegendTag