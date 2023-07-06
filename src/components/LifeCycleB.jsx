import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'CGG'
        }
        console.log('LifeCycleB constructor')
    }
    //return new state or null
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB component did mount')
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
    render() {
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
