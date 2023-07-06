import React from 'react'
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
    const greetParent=(childName)=>alert(`Hello parent ${childName}`)
    return (
        <div>
            <ChildComponent greetHandler={greetParent}/>
        </div>
    )
}
