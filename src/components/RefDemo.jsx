import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        //using old style
        this.cbRef = null
        this.setCbRef = element=>this.cbRef=element

    }
    //what exactly does this.inputRef holds 
    //inputRef hold an object after the reference is created
    //current points to the actual dom node
    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus()
        //react will call the ref callback with the dom elements when the componenet mounts 
        //with null when components unmounts
        if(this.cbRef)
           this.cbRef.focus()
        console.log();
    }
    clickHandler=()=>{
        alert()
    }
    clickHandler=()=>{
           alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/><br/>
                <input type='text' ref={this.setCbRef}/><br/>
                <button onClick={this.clickHandler}>Click</button>
                
            </div>
        )
    }
}
//as soon as the page loads the input field get focus.
//using ref this can be done in three simple steps
//1.create a ref -React.createRef() common tho create ref in constructor
//so that they can be referenced throughout the application
//2.attach this ref to the input elememt in the render method and to attach ref we make use
// of reserved ref attribute. We now have reference to the input elememt 
//To call focus() method on this input element  


