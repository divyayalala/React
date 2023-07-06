import React from 'react'

export const ClickHandle = () => {
    const clickHandle=(event,count=1)=>console.log('Button clicked',event,count)
    return (
        <div>
            <button onClick={clickHandle}>Click</button>
            <button onClick={(event)=>clickHandle(event,5)}>Click5</button>
        </div>
    )
}
