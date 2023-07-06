import React from 'react'
import './mystyles.css'
export const StyleSheets = (props) => {
    let className = props.primary?'primary':''
    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheets</h1>
        </div>
    )
}
