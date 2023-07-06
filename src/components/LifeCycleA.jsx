import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'CGG'
        }
        console.log('LifeCycleA constructor')
    }
    //return new state or null
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA component did mount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getsnapShotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleA componentUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Welcome to CGG'
        })
    }
    render() {
        console.log('LifeCycleA rendered')
        return (
            <div>
                LifeCycle A
                <br/>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
