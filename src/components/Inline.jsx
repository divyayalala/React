import React from 'react'

export const Inline = () => {
    const heading={
        color:'orange'
    }
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}
