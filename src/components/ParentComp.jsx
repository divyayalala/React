import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'CGG'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : 'CGG'
            })
        },2000)
    }
    render() {
        console.log('***********Parent comp render******************')
        return (
            <div>
                Parent component 
                <MemoComp name={this.state.name}/>
                {/* <PureComp name = {this.state.name}/>
                <RegComp name = {this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
