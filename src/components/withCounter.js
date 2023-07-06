import React, { Component } from 'react'
const withCounter = (WrappedComponent,incrementNum=1)=>{    
    class WithCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount = ()=>{
            this.setState(prevState=>{
                return {
                    count:prevState.count+incrementNum
                }
            })
        }
        render() {
            console.log(this.props)
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}
            {...this.props}/>
        }
    }
    return WithCounter
}
export default withCounter
