import React, { Component, createRef } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    focusInput(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}
