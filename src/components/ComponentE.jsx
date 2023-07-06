import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                {/* in the render() method context value is vailable as this.context */}
                Component E Context : {this.context}
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentE
//assign usercontext to the context type property on the class

//ComponentE.contextType=UserContex
//limitations of context type
//works only with class component
//you can subscribe only to single context
//many a times in your application u need to read more than one context in which scenario 
//the consumer component is the way to go
